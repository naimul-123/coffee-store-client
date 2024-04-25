import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
import Home from '../pages/Home';
import ShowCoffee from '../pages/ShowCoffee';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Users from '../pages/Users';
import UpdateUser from '../pages/UpdateUser';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,

		children: [
			{
				index: true,
				element: <Home />,
				loader: () => fetch('https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/coffee'),
			},
			{
				path: '/addcoffee',
				element: <AddCoffee />,
			},
			{
				path: '/showcoffee/:id',
				element: <ShowCoffee />,
				loader: ({ params }) => fetch(`https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/coffee/${params.id}`)
			},
			{
				path: '/updatecoffee/:id',
				element: <UpdateCoffee />,
				loader: ({ params }) => fetch(`https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/coffee/${params.id}`)
			},
			{
				path: '/signup',
				element: <SignUp />,

			},
			{
				path: '/signin',
				element: <SignIn />,

			},
			{
				path: '/users',
				element: <Users />,
				loader: () => fetch(`https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/users`)

			},
			{
				path: '/user/:id',
				element: <UpdateUser />,
				loader: ({ params }) => fetch(`https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/user/${params.id}`)

			},
		],
	},
]);

export default routes;
