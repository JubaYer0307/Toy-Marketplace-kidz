import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';

import Gallery from '../../../components/Gallery';
import Review from '../../../components/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;