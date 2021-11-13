import React from 'react';
import Banner from '../Banner/Banner';
import ComingSoon from '../ComingSoon/ComingSoon';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <ComingSoon></ComingSoon>
            <Footer></Footer>
        </div>
    );
};

export default Home;