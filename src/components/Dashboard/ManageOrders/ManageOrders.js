import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder/SingleOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://lit-beach-01803.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://lit-beach-01803.herokuapp.com/orders/${id}`;
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
    };

    const handleUpdateOrder = order => {
        const updatedOrder = {
            status: 'Confirmed',
            user_name: order.user_name,
            user_email: order.user_email,
            user_address: order.user_address,
            user_phone: order.user_phone,
            order_id: order.order_id,
            order_name: order.order_name,
            order_category: order.order_category,
            order_description: order.order_description,
            order_img: order.order_img,
            order_price: order.order_price
        };

        const uri = `https://lit-beach-01803.herokuapp.com/orders/${order._id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Confirmed successfully.');
                    window.location = "/dashboard/manage-all-orders";
                }
            })
    };

    if (orders.length !== 0) {
        return (
            <div>
                <h1 className="section-title w-20 mx-auto py-3 my-4">Manage All Orders</h1>
                <div className="ms-5 orders-container">
                    {
                        orders.map(order => <SingleOrder
                            key={order._id}
                            order={order}
                            handleDeleteOrder={handleDeleteOrder}
                            handleUpdateOrder={handleUpdateOrder}
                        ></SingleOrder>)
                    }
                </div>
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

export default ManageOrders;