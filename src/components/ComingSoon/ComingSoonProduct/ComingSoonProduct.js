import React from 'react';
import './ComingSoonProduct.css';

const ComingSoonProduct = (props) => {
    const { name, description, img } = props.product;
    return (
        <div className="product-body">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title py-4">{name}</h4>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonProduct;