import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Coffees from '../components/Coffees';

const Home = () => {
	const coffees = useLoaderData();
	// console.log(coffees);
	return (
        <div>
            <Hero />
            <Features />
            <Coffees coffees={coffees} />
			<div className='grid grid-cols-3 gap-3'>
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

export default Home;
