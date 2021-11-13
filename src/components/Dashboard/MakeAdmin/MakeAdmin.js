import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://lit-beach-01803.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin added successfully.');
                    window.location = "/dashboard/dashboard-home";
                }
                else {
                    alert('User not found, or some error occurred.');
                }
            })
        e.preventDefault();
    }
    return (
        <div style={{ height: "100vh" }}>
            <h1 className="section-title mx-auto py-2 my-5">Make an Admin</h1>
            <form onSubmit={handleAdminSubmit} className="input-group w-50 mx-auto">
                <input
                    onBlur={handleOnBlur}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="inputEmail"
                    required />
                <button className="btn btn-outline-secondary make-admin-button" type="submit" id="button-addon2">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;