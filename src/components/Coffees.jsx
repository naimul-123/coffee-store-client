import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router-dom';

const Coffees = ({ coffees }) => {
	return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='max-w-screen-sm mx-au'>
                <p>--- Sip & Savor ---</p>
                <h2>Our Popular Products</h2>
                <Link to="/addcoffee">Add Coffee</Link>
            </div>
			<div className='grid grid-cols-2 gap-3 '>
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
					/>
				))}
			</div>
		</div>
	);
};

export default Coffees;
