import { ActivitiesContext } from "../context/activitiesContext";
import { activities } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function ActivitiesProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(activities, ['actvt']);

    return (
        <ActivitiesContext.Provider value={{ activities: state, setActivitiesState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </ActivitiesContext.Provider>
    );
}