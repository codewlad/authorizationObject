import { ObjectsContext } from "./objectsContext";
import { objects } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function ObjectsProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(objects, ['object']);

    return (
        <ObjectsContext.Provider value={{ objects: state, setObjectsState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </ObjectsContext.Provider>
    );
}