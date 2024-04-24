import React from 'react';

const CoffeeCard = ({ coffee }) => {
	const { coffeeName, chef, supplier, taste, catagory, details, photoURL } =
		coffee;
	return (
		<div className='flex p-8 gap-2  bg-[#F5F4F1] shadow-xl'>
			<figure className='max-w-48'>
				<img
					src={photoURL}
					alt={coffeeName}
				/>
			</figure>
			<div className=''>
                <h2 className='card-title'>{coffeeName}</h2>
                <p>{details}</p>
			</div>
			<div className=''>
                <h2 className='card-title'>{coffeeName}</h2>
                <p>{details}</p>
			</div>
		</div>
	);
};

export default CoffeeCard;
