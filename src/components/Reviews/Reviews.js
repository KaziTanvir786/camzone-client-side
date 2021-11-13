import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://lit-beach-01803.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    if (reviews.length !== 0) {
        return (
            <div className="container" id="reviews">
                <h1 className="section-title mx-auto py-3 my-5">Reviews</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
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

export default Reviews;

