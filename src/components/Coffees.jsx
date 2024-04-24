import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router-dom';

const Coffees = ({ coffees, setCoffees }) => {
	return (
        <div className='max-w-screen-xl mx-auto mt-16'>
            <div className='max-w-screen-sm mx-auto text-center my-8'>
                <p className='text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
                <h2 className='font-rancho text-6xl text-[#331A15]'>Our Popular Products</h2>
                <Link to="/addcoffee" className='py-2 px-3 bg-[#E3B577] text-[#242222] border-2 border-[#331A15] font-rancho'>Add Coffee</Link>
            </div>
			<div className='grid grid-cols-2 gap-3 '>
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}
					/>
				))}
			</div>
		</div>
	);
};

export default Coffees;
