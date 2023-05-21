import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';

import Gallery from '../../../components/Gallery';
import Review from '../../../components/Review';
import ShopNow from '../../../components/ShopNow';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Home')
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