import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://camzone-server-side.up.railway.app/explore')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length !== 0) {
        return (
            <div className="products-container">
                <h1 className="section-title w-20 mx-auto py-3 mb-4">All Products</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <ExploreProduct
                            key={product._id}
                            product={product}
                        ></ExploreProduct>)
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

export default Explore;