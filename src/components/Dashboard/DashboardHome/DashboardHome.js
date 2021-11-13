import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            <h3 className="py-2 my-3">Welcome to CAM <span style={{ color: 'red' }}>ZONE</span></h3>
            <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} className="my-4" style={{ width: "200px", height: "200px", borderRadius: "50%" }} alt="" />
            {
                admin ? <h1>{user.displayName} <small>(Admin)</small></h1> : <h1>{user.displayName}</h1>
            }
            <h6 style={{ fontSize: "17px", color: "gray" }}>Email: {user.email}</h6>
        </div>
    );
};

export default DashboardHome;