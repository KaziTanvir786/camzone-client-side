import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import OrderedProduct from './OrderedProduct/OrderedProduct';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://camzone-server-side.up.railway.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    console.log(orders);

    const myOrders = orders.filter(order => order.user_email === user.email && order.user_name === user.displayName);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://camzone-server-side.up.railway.app/orders/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully.');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    if (myOrders.length !== 0) {
        return (
            <div className="ms-5 orders-container">
                <h1 className="section-title w-20 mx-auto py-3 my-4">My Orders</h1>
                {
                    myOrders.map(order => <OrderedProduct
                        key={order._id}
                        order={order}
                        handleDeleteOrder={handleDeleteOrder}
                    ></OrderedProduct>)
                }
            </div>
        );
    }
    else {
        return (
            <div>
                <img width="50%" src="https://i.ibb.co/bJtsKLz/no-item-found-here.png" alt="" />
            </div>
        );
    }
};

export default MyOrders;