import { ObjectFieldContext } from "./objectFieldContext";
import { objectField } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function ObjectFieldProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(objectField, ['object', 'field']);

    return (
        <ObjectFieldContext.Provider value={{ objectField: state, setObjectFieldState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </ObjectFieldContext.Provider>
    );
}