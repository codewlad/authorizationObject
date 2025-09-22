import { UserGroupContext } from "./userGroupContext";
import { userGroup } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function UserGroupProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(userGroup, ['user', 'group']);

    return (
        <UserGroupContext.Provider value={{ userGroup: state, setUserGroupState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </UserGroupContext.Provider>
    );
}