import React from 'react';

const SingleProduct = (props) => {
    const { _id, name, category, description, img, price } = props.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top card-image mx-auto" alt="loading..." />
                <div className="card-body">
                    <h3 className="card-title py-2">{name}</h3>
                    <small className="text-secondary d-block pb-3">Category: {category}</small>
                    <h5>Description:</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <h6>Price: <span className="price-text">${price}</span> <span className="price-text-small">.00</span> </h6>
                    <button onClick={() => props.handleDeleteOrder(_id)} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;