import { ProjectsContext } from "./projectsContext";
import { projects } from "../database/db";
import { useGenericProvider } from "../hooks/useGenericProvider";

export function ProjectsProvider({ children }) {
    const { state, setState, deleteRow, addRow, updateRow } = useGenericProvider(projects, ['project']);

    return (
        <ProjectsContext.Provider value={{ projects: state, setProjectsState: setState, deleteRow, addRow, updateRow }}>
            {children}
        </ProjectsContext.Provider>
    );
}