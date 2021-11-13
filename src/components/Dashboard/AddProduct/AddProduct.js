import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://lit-beach-01803.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added successfully.');
                    window.location = "/";
                    reset();
                }
            })
    };
    return (
        <div className="add-product w-75 mx-auto">
            <h1 className="section-title mx-auto py-3 my-4">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="Name" {...register("name", { required: true, maxLength: 100 })} /> <br />
                <input className="form-control" placeholder="Category" {...register("category", { required: true, maxLength: 100 })} /> <br />
                <textarea className="form-control" placeholder="Description" {...register("description")} /> <br />
                <input className="form-control" placeholder="Image URL" {...register("img")} /> <br />
                <input className="form-control" placeholder="Price" type="number" {...register("price")} /> <br />

                <button className="btn login-btn btn-outline-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;