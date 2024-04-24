import Swal from 'sweetalert2';

const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const coffeeName = form.coffeeName.value;
		const chef = form.chef.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const catagory = form.catagory.value;
		const details = form.details.value;
		const photoURL = form.photoURL.value;
		const formdata = {
			coffeeName,
			chef,
			supplier,
			taste,
			catagory,
			details,
			photoURL,
		};
		fetch(`http://localhost:3000/coffee`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(formdata),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					Swal.fire({
						title: 'Success!',
						text: 'Coffee added successfully!',
						icon: 'success',
						confirmButtonText: 'OK',
					});
					form.reset();
				}
				console.log(data);
			});
	};

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
				<form
					className=''
					onSubmit={handleAddCoffee}>
					<div className='grid grid-cols-2 gap-4'>
						<div className='form-control min-w-96'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='Enter coffee name'
								name='coffeeName'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Chef</span>
							</label>
							<input
								type='text'
								name='chef'
								placeholder='Enter coffee chef'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Supplier</span>
							</label>
							<input
								type='text'
								name='supplier'
								placeholder='Enter coffee supplier'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Taste</span>
							</label>
							<input
								type='text'
								name='taste'
								placeholder='Enter coffee taste'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Catagory</span>
							</label>
							<input
								type='text'
								name='catagory'
								placeholder='Enter coffee catagory'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Details</span>
							</label>
							<input
								type='text'
								name='details'
								placeholder='Enter coffee details'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control col-span-2'>
							<label className='label'>
								<span className='label-text'>Photo</span>
							</label>
							<input
								type='text'
								name='photoURL'
								placeholder='Enter coffee photoURL'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control mt-6 col-span-2'>
							<button className='btn bg-[#D2B48C] border-[#331A15] font-rancho'>
								Add Coffee
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCoffee;
