import React from 'react';

const NewUser = ({ user }) => {
    return (
        <div>
            <h2>User Details</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
        </div>
    );
}

export default NewUser;