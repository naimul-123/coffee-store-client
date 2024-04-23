const AddCoffee = () => {
	return (
		<div className=' max-w-screen-lg p-12 mx-auto bg-[#F4F3F0]'>
			<div className='text-center max-w-3/5 w-full'>
				<h1 className='text-5xl font-rancho'>Add New Coffee</h1>
				<p className='py-6 font-raleway'>
					It is a long established fact that a reader will be distraceted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using Content here.
				</p>
			</div>
			<div className=''>
				<form className=''>
					<div className='grid grid-cols-2 gap-4'>
						<div className='form-control min-w-96'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='password'
								className='input input-bordered'
								required
							/>
							<label className='label'>
								<a
									href='#'
									className='label-text-alt link link-hover'>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCoffee;
