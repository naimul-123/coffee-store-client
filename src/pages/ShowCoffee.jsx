import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
const ShowCoffee = () => {
	const coffee = useLoaderData();
	const {
		_id,
		coffeeName,
		chef,
		supplier,
		taste,
		catagory,
		details,
		photoURL,
	} = coffee;
	return (
		<div className='w-3/5 mx-auto'>
			<Link to='/'>
				<FaArrowLeftLong className='inline-flex' />{' '}
				<span className='font-rancho text-[#374151] text-3xl'>
					Back to Home
				</span>
			</Link>

			<div className='flex p-8  bg-[#F5F4F1] shadow-xl items-center gap-24 justify-center'>
				<figure className='max-w-48'>
					<img
						src={photoURL}
						alt={coffeeName}
					/>
				</figure>
				<div className=''>
					<h2 className='card-title text-4xl font-rancho text-[#331A15]'>Niceties</h2>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Name: </span>{coffeeName}</p>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Chef: </span>{chef}</p>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Supplier: </span>{supplier}</p>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Taste: </span>{taste}</p>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Catagory: </span>{catagory}</p>
                    <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Details: </span>{details}</p>
                   
				</div>
			</div>
		</div>
	);
};

export default ShowCoffee;
