import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            uadate user
        </div>
    );
};

export default UpdateUser;