import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import './App.scss';
import { useAppStore } from './store/app.store';

const App: React.FC = () => {
	const { apiKey } = useAppStore();
	const navigate = useNavigate();
  
	useEffect(() => {
	  if (apiKey) {
		navigate('/dashboard');
	  } else {
		navigate('/login');
	  }
	}, [apiKey, navigate]);

	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
			<Outlet />
		</MantineProvider>
	);
}
export default App
