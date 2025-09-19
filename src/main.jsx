import { AppProviders } from './context/appProviders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './styles/global';
import { themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './pages/Home';
import { ActivityPage } from './pages/Activity';
import { FieldPage } from './pages/Field';
import { GroupPage } from './pages/Group';
import { ObjectPage } from './pages/Object';
import { ProjectPage } from './pages/Project';
import { ObjectFieldPage } from './pages/ObjectField';
import { AuthGroupPage } from './pages/AuthGroup';

createRoot(document.getElementById('root')).render(
	<StrictMode>

		<ThemeProvider theme={themeLight}>
			<GlobalStyles />
			<BrowserRouter>
				<AppProviders>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/activity" element={<ActivityPage />} />
						<Route path="/field" element={<FieldPage />} />
						<Route path="/object" element={<ObjectPage />} />
						<Route path="/group" element={<GroupPage />} />
						<Route path="/project" element={<ProjectPage />} />
						<Route path="/object_field" element={<ObjectFieldPage />} />
						<Route path="/auth_group" element={<AuthGroupPage />} />
					</Routes>
				</AppProviders>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
