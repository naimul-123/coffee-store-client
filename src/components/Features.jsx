import React from 'react';

const Features = () => {
	return (
		<div className=' bg-[#ECEAE3] p-2 flex flex-col items-center'>
			<div className='max-w-screen-xl  grid grid-cols-4 justify-center mx-auto w-full gap-4 '>
				<div className='flex flex-col justify-start space-y-2 max-w-72'>
					<figure className=''>
						<img
							src='/image/icon-1.png'
							alt='ShoAwesome Aromaes'
							className='rounded-xl'
						/>
					</figure>

					<h2 className='text-4xl text-[#331A15] font-rancho'>Awesome Aroma</h2>
					<p className='text-[#1B1A1A]'>
						You will definitely be a fan of the design & aroma of your coffee
					</p>
				</div>
				<div className='flex flex-col justify-start space-y-2 max-w-72'>
					<figure className=''>
						<img
							src='/image/icon-2.png'
							alt='High Quality'
							className='rounded-xl'
						/>
					</figure>

					<h2 className='text-4xl text-[#331A15] font-rancho'>High Quality</h2>
					<p className='text-[#1B1A1A]'>
						We served the coffee to you maintaining the best quality
					</p>
				</div>
				<div className='flex flex-col justify-start space-y-2 max-w-72'>
					<figure className=''>
						<img
							src='/image/icon-3.png'
							alt='Pure Grades'
							className='rounded-xl'
						/>
					</figure>

					<h2 className='text-4xl text-[#331A15] font-rancho'>Pure Grades</h2>
					<p className='text-[#1B1A1A]'>
						The coffee is made of the green coffee beans which you will love
					</p>
				</div>
				<div className='flex flex-col justify-start space-y-2 max-w-72'>
					<figure className=''>
						<img
							src='/image/icon-4.png'
							alt='Proper Roasting'
							className='rounded-xl'
						/>
					</figure>

					<h2 className='text-4xl text-[#331A15] font-rancho'>Proper Roasting</h2>
					<p className='text-[#1B1A1A]'>
						Your coffee is brewed by first roasting the green coffee beans
					</p>
				</div>

			</div>
		</div>
	);
};

export default Features;
