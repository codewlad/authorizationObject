import { UsersContext } from "./usersContext";
import { users } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function UsersProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(users, ['user']);

    return (
        <UsersContext.Provider value={{ users: state, setUsersState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </UsersContext.Provider>
    );
}