import { ActivitiesProvider } from './activitiesProvider';
import { FieldsProvider } from './fieldsProvider';
import { ObjectsProvider } from './objectsProvider';
import { GroupsProvider } from './groupsProvider';
import { ProjectsProvider } from './projectsProvider';
import { ObjectFieldProvider } from './objectFieldProvider';
import { AuthGroupProvider } from './authGroupProvider';
import { UsersProvider } from './usersProvider';
import { UserGroupProvider } from './userGroupProvider';

export function AppProviders({ children }) {
    return (
        <ActivitiesProvider>
            <FieldsProvider>
                <ObjectsProvider>
                    <GroupsProvider>
                        <UsersProvider>
                            <ProjectsProvider>
                                <ObjectFieldProvider>
                                    <UserGroupProvider>
                                        <AuthGroupProvider>
                                            {children}
                                        </AuthGroupProvider>
                                    </UserGroupProvider>
                                </ObjectFieldProvider>
                            </ProjectsProvider>
                        </UsersProvider>
                    </GroupsProvider>
                </ObjectsProvider>
            </FieldsProvider>
        </ActivitiesProvider>
    );
}