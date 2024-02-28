import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ComingSoonProduct from './ComingSoonProduct/ComingSoonProduct';
import './ComingSoon.css';

const ComingSoon = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://camzone-server-side.up.railway.app/coming-soon')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length !== 0) {
        return (
            <div id="coming-soon" className="products-container">
                <h1 className="section-title mx-auto py-3 my-4">Coming Soon...</h1>
                <div className="coming-soon-container">
                    {
                        products.map(product => <ComingSoonProduct
                            key={product._id}
                            product={product}
                        ></ComingSoonProduct>)
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

export default ComingSoon;