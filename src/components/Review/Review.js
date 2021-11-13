import React from 'react';
import './Review.css';

const Review = (props) => {
    const { review } = props;

    if (parseFloat(review.rating) === 5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 5 && parseFloat(review.rating) >= 4.5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 4.5 && parseFloat(review.rating) >= 4) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 4 && parseFloat(review.rating) >= 3.5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 3.5 && parseFloat(review.rating) >= 3) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 3 && parseFloat(review.rating) >= 2.5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 2.5 && parseFloat(review.rating) >= 2) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 2 && parseFloat(review.rating) >= 1.5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (parseFloat(review.rating) < 1.5 && parseFloat(review.rating) >= 1) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong>Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    else if (parseFloat(review.rating) < 1 && parseFloat(review.rating) >= 0.5) {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i class="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="col review-card">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{review.name}</h3>
                        <h6>{review.email}</h6>
                        <div>
                            <span style={{ color: "gray" }}>Rating: <span style={{ fontSize: "36px", color: "rgb(255, 185, 8)" }}>{parseFloat(review.rating)}</span>/5.0</span>
                        </div>
                        <div className="rating-star">
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="py-4">
                            <strong className="py-1">Comment:</strong>
                            <p className="card-text pt-3">{review.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Review;

