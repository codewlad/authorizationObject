import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './styles/global';
import { themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './pages/Home';
import { ActivityPage } from './pages/Activity';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={themeLight}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/activity" element={<ActivityPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);
