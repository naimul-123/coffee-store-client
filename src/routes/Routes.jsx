import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
import Home from '../pages/Home';
import ShowCoffee from '../pages/ShowCoffee';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		
		children: [
			{
				index:true,
				element: <Home />,
				loader: ()=> fetch('http://localhost:3000/coffee'),
			},
			{
				path: '/addcoffee',
				element: <AddCoffee />,
			},
			{
				path: '/showcoffee/:id',
				element: <ShowCoffee />,
				loader: ({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
			},
			{
				path: '/updatecoffee/:id',
				element: <UpdateCoffee />,
				loader: ({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
			},
		],
	},
]);

export default routes;
