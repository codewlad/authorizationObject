import { useMemo, useContext } from "react";
import { AuthGroupContext } from '../context/authGroupContext';
import { UserGroupContext } from '../context/userGroupContext';

export function useAuthorizationCheck({ authRequest, userLogged }) {
    const { userGroup } = useContext(UserGroupContext);
    const { authGroup } = useContext(AuthGroupContext);

    const result = useMemo(() => {
        if (!authRequest || !authGroup || !userGroup) return null;

        function getUserGroups(userLogged, userGroup) {
            if (!userGroup || !userGroup.rows) return [];
            return userGroup.rows
                .filter(entry => entry.user === String(userLogged))
                .map(entry => parseInt(entry.group));
        }

        const user = authRequest.User <= 0 ? userLogged : authRequest.User;
        const userGroups = getUserGroups(user, userGroup);

        if (userGroups.length === 0) {
            const missing = authRequest.Fields.map(pair => ({
                Object: authRequest.AuthObject,
                Group: null,
                Field: pair.Field,
                Value: pair.Value
            }));

            return {
                Authorized: false,
                AuthorizedGroup: null,
                Authorizations: [],
                MissingAuthorizations: missing
            };
        }

        const groupedByGroup = userGroups.reduce((acc, groupId) => {
            acc[groupId] = authGroup.rows
                .filter(row => parseInt(row.group) === groupId);
            return acc;
        }, {});

        let authorizedGroup = null;

        const validGroupKey = Object.keys(groupedByGroup).find(groupKey => {
            const isValid = authRequest.Fields.every(pair =>
                groupedByGroup[groupKey].some(ag =>
                    ag.object === authRequest.AuthObject &&
                    ag.field === pair.Field &&
                    (ag.value === pair.Value || ag.value === "*")
                )
            );
            if (isValid) {
                authorizedGroup = groupKey;
                return true;
            }
            return false;
        });

        const authorized = validGroupKey !== undefined;
        const missing = [];

        if (!authorized) {
            for (const [groupKey, groupItems] of Object.entries(groupedByGroup)) {
                for (const pair of authRequest.Fields) {
                    const found = groupItems.some(ag =>
                        ag.object === authRequest.AuthObject &&
                        ag.field === pair.Field &&
                        (ag.value === pair.Value || ag.value === "*")
                    );

                    if (!found) {
                        missing.push({
                            Object: authRequest.AuthObject,
                            Group: groupKey,
                            Field: pair.Field,
                            Value: pair.Value
                        });
                    }
                }
            }
        }

        const groupAuthorizations = authorizedGroup
            ? groupedByGroup[authorizedGroup].map(auth => ({
                Field: auth.field,
                Value: auth.value
            }))
            : [];

        return {
            Authorized: authorized,
            AuthorizedGroup: authorizedGroup,
            Authorizations: groupAuthorizations,
            MissingAuthorizations: missing
        };

    }, [authRequest, authGroup, userGroup, userLogged]);

    return result;
}