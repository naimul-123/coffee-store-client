import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Coffees from '../components/Coffees';
import { useState } from 'react';

const Home = () => {
	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees]= useState(loadedCoffees)
	
	


	return (
        <div>
            <Hero />
            <Features />
            <Coffees coffees={coffees} setCoffees= {setCoffees} />

		</div>
	);
};

export default Home;
