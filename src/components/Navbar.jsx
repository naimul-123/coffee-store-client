import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const navlist = (
		<>
			<li>
				<NavLink to='/addcoffee'>Add Coffee</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar flex justify-center bg-[url('/image/header-bg.png')]">
			
				<Link
					to='/'
					className='font-rancho text-6xl text-white'>
					{' '}
					<img
						src='/image/coffee_logo.png'
						alt='Espresso Emporium'
					/>
					Espresso Emporium
				</Link>
			
		</div>
	);
};

export default Navbar;
