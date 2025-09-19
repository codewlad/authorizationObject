import { GroupsContext } from "./groupsContext";
import { groups } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function GroupsProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(groups, ['group']);

    return (
        <GroupsContext.Provider value={{ groups: state, setGroupsState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </GroupsContext.Provider>
    );
}