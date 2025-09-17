import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './styles/global';
import { themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={themeLight}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	</StrictMode>
);
