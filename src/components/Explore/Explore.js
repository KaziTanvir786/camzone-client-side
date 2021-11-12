import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-beach-01803.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length !== 0) {
        return (
            <div className="products-container">
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