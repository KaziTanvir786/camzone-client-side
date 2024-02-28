import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://camzone-server-side.up.railway.app/explore')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://camzone-server-side.up.railway.app/explore/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully.');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    };


    if (products.length !== 0) {
        return (
            <div className="ms-5 ps-5 products-container">
                <h1 className="section-title w-20 mx-auto py-3 my-4">Manage Products</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                            handleDeleteOrder={handleDeleteProduct}
                        ></SingleProduct>)
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

export default ManageProducts;