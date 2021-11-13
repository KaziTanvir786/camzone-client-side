import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, category, description, img, price } = props.product;
    return (
        <div className="col">
            <div className="card product-card h-100">
                <img src={img} className="card-img-top card-image mx-auto" alt="loading..." />
                <div className="card-body">
                    <h3 className="card-title py-2">{name}</h3>
                    <small className="text-secondary d-block pb-3">Category: {category}</small>
                    <h5>Description:</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <h6>Price: <span className="price-text">${price}</span> <span className="price-text-small">.00</span> </h6>
                    <Link to={`/order/${_id}`}><button className="btn btn-danger buy-now-button">Buy now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;