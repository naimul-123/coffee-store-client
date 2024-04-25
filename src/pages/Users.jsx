import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loaderUsers = useLoaderData()
    const [users, setUsers] = useState(loaderUsers)

    const handleDelete = (id) => {
        console.log(id)
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
                fetch(`https://coffee-store-server-dx149rv0g-naimuls-projects-ee8c232f.vercel.app/users/${id}`, {
                    method: "DELETE",


                })
                    .then((res) => res.json())
                    .then((data) => {

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your coffee has been deleted.',
                                icon: 'success',
                            });

                            const remainingUsers = users.filter((user) => user._id !== id)
                            setUsers(remainingUsers)
                        }
                    });
            }
        });
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td className='flex gap-4'>
                                <Link to={`/user/${user._id}`} className='link link-secondary'>Update</Link>
                                <button className='link link-secondary' onClick={() => handleDelete(user._id)}>Update</button>
                            </td>
                        </tr>)}



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;