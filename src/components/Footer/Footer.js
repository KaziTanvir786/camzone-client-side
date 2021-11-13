import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-4 pt-4">
            <div className="footer-body">
                <div>
                    <h5 className="footer-title mx-auto">Contact Us</h5>
                    <p>Camzone Camera Shop</p>
                    <p>27 Old Woodcourt Street, Virginia, USA</p>
                    <p>Cell: +995 1452 441122</p>
                    <p>Email: info@camzone.shop.com</p>
                </div>
                <div>
                    <h5 className="footer-title mx-auto">Social Networks</h5>
                    <div className="my-4">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <h6 className="py-4">All rights reserved to Travellica ©</h6>
                </div>
                <div>
                    <h5 className="footer-title mx-auto">Subscribe us</h5>
                    <div className="mx-auto input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-info footer-button" type="button" id="button-addon2">Subsccribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;