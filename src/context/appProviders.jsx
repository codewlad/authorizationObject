import { ActivitiesProvider } from './activitiesProvider';
import { FieldsProvider } from './fieldsProvider';
import { ObjectsProvider } from './objectsProvider';
import { GroupsProvider } from './groupsProvider';
import { ProjectsProvider } from './projectsProvider';
import { ObjectFieldProvider } from './objectFieldProvider';
import { AuthGroupProvider } from './authGroupProvider';

export function AppProviders({ children }) {
    return (
        <ActivitiesProvider>
            <FieldsProvider>
                <ObjectsProvider>
                    <GroupsProvider>
                        <ProjectsProvider>
                            <ObjectFieldProvider>
                                <AuthGroupProvider>
                                    {children}
                                </AuthGroupProvider>
                            </ObjectFieldProvider>
                        </ProjectsProvider>
                    </GroupsProvider>
                </ObjectsProvider>
            </FieldsProvider>
        </ActivitiesProvider>
    );
}