import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    console.log(user.email);
    const onSubmit = data => {
        axios.post('https://lit-beach-01803.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully.');
                    window.location = "/";
                    reset();
                }
            })
    };

    return (
        <div>
            <h1 className="section-title w-20 mx-auto py-3 my-4">Add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="add-reiew w-50 mx-auto">
                <div className="mb-3 row">
                    <label for="inputName" className="col-sm-2 col-form-label text-start">Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            value={user.displayName}
                            {...register("name", { required: true })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputEmail" className="col-sm-2 col-form-label text-start">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            value={user.email}
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputRating" className="col-sm-2 col-form-label text-start">Rating</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputRating"
                            placeholder="Between 1 to 5"
                            {...register("rating", { required: true })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputReview" className="col-sm-2 col-form-label text-start">Review</label>
                    <div className="col-sm-10">
                        <textarea
                            type="text"
                            className="form-control"
                            id="inputReview"
                            placeholder="Write your comment here..."
                            {...register("review", { required: true, maxLength: 200 })}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-primary buy-now-button">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;