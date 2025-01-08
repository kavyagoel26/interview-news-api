import {StrictMode, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import {Suspense, lazy } from 'react';


const Detail = lazy(()=> import("./pages/Detail/Detail"));
const Landing = lazy(()=> import('./pages/landing/Landing'));
const Login = lazy(()=> import('./pages/login/Login'));

export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/login',
				element:(<Suspense fallback={<h1>Loading...</h1>}> <Login/> </Suspense>)
			},{
				path: '/dashboard',
				element:(
					<ProtectedRoute>
					<Suspense fallback={<h1>Loading...</h1>}> <Landing/> </Suspense>
					</ProtectedRoute>
				 ) ,
			},
			{
				path: '/detail/:resourceId',
				element:( <Suspense fallback={<h1>Loading...</h1>}> <Detail/> </Suspense> ),
			}
		]
	}
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	
	</StrictMode>
);
