import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '/addcoffee',
				element: <AddCoffee />,
			},
			{
				path: '/updatecoffee',
				element: <UpdateCoffee />,
			},
		],
	},
]);

export default routes;
