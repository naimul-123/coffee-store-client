import React from 'react';

const Hero = () => {
	return (
		<div
			className='hero min-h-[60vh]'
			style={{
				backgroundImage:
					'url(/image/coffee_banner.png)',
			}}>
			
			<div className='hero-content text-neutral-content'>
				<div className='max-w-lg space-y-2 relative left-[60%]'>
					<h1 className=' text-5xl font-rancho'>Would you like a Cup of Delicious Coffee?</h1>
					<p className=' font-raleway'>
						It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
					</p>
					<button className='py-2 px-3 bg-[#E3B577] text-[#242222] font-rancho'>Learn more</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
