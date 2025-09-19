import { AuthGroupContext } from "./authGroupContext";
import { authGroup } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function AuthGroupProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(authGroup, ['auth']);

    return (
        <AuthGroupContext.Provider value={{ authGroup: state, setAuthGroupState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </AuthGroupContext.Provider>
    );
}