import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-4 pt-4">
            <h6 className="py-4">All rights reserved to Travellica ©</h6>
            <div className="mx-auto input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-info" type="button" id="button-addon2">Subsccribe</button>
            </div>
            <div className="footer-body">
                <div id="left-part">
                    <h5 className="footer-title mx-auto">Important Links</h5>
                    <div>
                        <p><a href="https://www.biman-airlines.com/">Biman Bangladesh</a></p>
                        <p><a href="https://www.bd.emb-japan.go.jp/itprtop_en/index.html">Japan Embassy</a></p>
                        <p><a href="https://www.mfa.gov.sg/dhaka">Singapore Embassy</a></p>
                        <p><a href="https://www.booking.com/index.en.html?aid=309654;label=hotels-english-en-row-ugh58fqe1eomojTnWeaw2wS541037160700:pl:ta:p1:p22,563,000:ac:ap:neg:fi:tikwd-17218370:lp9069466:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=&gclid=CjwKCAjw2vOLBhBPEiwAjEeK9na37GXVwOUrw0t3A9qzcgphKHz9HrZhF3-tJ0biy7NSHX1p0qY4sxoCJ6sQAvD_BwE">Book a Hotel</a></p>
                    </div>
                </div>
                <div id="middle-part">
                    <h5 className="footer-title mx-auto">Contact Us</h5>
                    <p>Travellica Travel Agency</p>
                    <p>27 Old Woodcourt Street, Virginia, USA</p>
                    <p>Cell: +995 1452 441122</p>
                    <p>Email: info@travellica.agency.com</p>
                </div>
                <div id="right-part">
                    <h5 className="footer-title mx-auto">Social Networks</h5>
                    <div className="my-4">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;