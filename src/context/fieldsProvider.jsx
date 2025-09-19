import { FieldsContext } from "./fieldsContext";
import { fields } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function FieldsProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(fields, ['field']);

    return (
        <FieldsContext.Provider value={{ fields: state, setFieldsState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </FieldsContext.Provider>
    );
}