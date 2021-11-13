import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [products, setProducts] = useState([]);
    const { productId } = useParams();
    console.log(productId);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://lit-beach-01803.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    let id = 'N/A';
    let name = 'N/A';
    let category = 'N/A';
    let description = 'N/A';
    let img = 'N/A';
    let price = 'N/A';

    products.map(product => {
        if (product._id === productId) {
            id = product._id;
            category = product.category;
            name = product.name;
            description = product.description;
            img = product.img;
            price = product.price;
        }
        return '';
    });

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const handleAddOrder = e => {
        const status = "Pending";
        const user_name = nameRef.current.value;
        const user_email = emailRef.current.value;
        const user_address = addressRef.current.value;
        const user_phone = phoneRef.current.value;
        const order_id = id;
        const order_name = name;
        const order_category = category;
        const order_description = description;
        const order_img = img;
        const order_price = price;


        const newOrder = { status, user_name, user_email, user_address, user_phone, order_id, order_name, order_category, order_description, order_img, order_price };
        fetch('https://lit-beach-01803.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                    window.location = "/";
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    if (products.length !== 0) {
        return (
            <div className="order mx-auto">
                <div>
                    <img src={img} alt="" />
                    <h3 className="p-4">{name}</h3>
                    <p style={{ textAlign: "justify" }}>{description}</p>
                    <h4 className="text-danger">Fees: ${price}</h4>
                </div>
                <br />
                <h2 className="heading mx-auto w-75 my-5">Enter your details and book the package</h2>
                <div>
                    <form onSubmit={handleAddOrder} className="row g-3">
                        <div className="col-md-12">
                            <input ref={nameRef} placeholder="Name" required value={user.displayName} type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-md-12">
                            <input ref={emailRef} placeholder="Email" required value={user.email} type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <input ref={addressRef} placeholder="Address" required type="text" className="form-control" id="inputAddress" />
                        </div>
                        <div className="col-12">
                            <input ref={phoneRef} placeholder="Phone" required type="text" className="form-control" id="inputPhone" />
                        </div>
                        <button type="submit" className="btn btn-success w-50 mx-auto my-4 p-3">Book the package now</button>
                    </form>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        );
    }
};

export default PlaceOrder;