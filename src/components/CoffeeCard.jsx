import React from 'react';
import { CgKey } from 'react-icons/cg';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee }) => {
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

	const handleDelete = (id) => {
		console.log(id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/coffee/${_id}`, {
					method: "DELETE",

					
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount>0) {
							Swal.fire({
								title: 'Deleted!',
								text: 'Your coffee has been deleted.',
								icon: 'success',
							});
						}
					});
			}
		});
	};

	return (
		<div className='flex p-8  bg-[#F5F4F1] shadow-xl items-center gap-6'>
			<figure className='max-w-48'>
				<img
					src={photoURL}
					alt={coffeeName}
				/>
			</figure>
			<div>
				<div className=''>
					<h2 className='card-title'>{coffeeName}</h2>
					<p>{details}</p>
				</div>
				<div className=''>
					<h2 className='card-title'>{coffeeName}</h2>
					<p>{details}</p>
				</div>
			</div>
			<div className='flex flex-col gap-2 text-xl '>
				<Link
					to={`/showcoffee/${_id}`}
					className='btn btn-sm btn-square bg-[#D2B48C] text-white'>
					<FaEye />
				</Link>
				<Link
					to={`/updatecoffee/${_id}`}
					className='btn btn-sm btn-square bg-[#3C393B] text-white'>
					<MdEdit />
				</Link>
				<button
					onClick={() => handleDelete(_id)}
					className='btn btn-sm btn-square bg-[#EA4744] text-white'>
					<MdDelete />
				</button>
			</div>
		</div>
	);
};

export default CoffeeCard;
