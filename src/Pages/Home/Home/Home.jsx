import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';

import Gallery from '../../../components/Gallery';
import Review from '../../../components/Review';
import ShopNow from '../../../components/ShopNow';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            
            <Gallery></Gallery>
            <Review></Review>
            <ShopNow></ShopNow>
        </div>
    );
};

export default Home;