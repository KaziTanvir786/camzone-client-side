import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-beach-01803.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length !== 0) {
        return (
            <div id="products" className="products-container">
                <h1 className="p-3 mx-auto mt-3 mb-5 section-title">Our products</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        )
    }
};

export default Products;