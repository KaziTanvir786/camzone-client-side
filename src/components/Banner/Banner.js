import React from 'react';
import './Banner.css';
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text mx-auto">
                <div className="looped-text">
                    <div className="banner-title">
                        <span className="text-whitesmoke">CAM</span> <span className="text-red">ZONE</span> <br />
                    </div>
                    <TextLoop>
                        <span className="textloop-text">DSLR Camera</span>
                        <span className="textloop-text">DSLR Lenses</span>
                        <span className="textloop-text">Mirrorless Camera</span>
                        <span className="textloop-text">Mirrorless Lenses</span>
                        <span className="textloop-text">Camera Stands</span>
                        <span className="textloop-text">Camera Bags</span>
                        <span className="textloop-text">Camera Lightings</span>
                    </TextLoop>
                </div>
                <button className="btn btn-outline-danger banner-btn">Visit out Products</button>
            </div>
        </div>
    );
};

export default Banner;