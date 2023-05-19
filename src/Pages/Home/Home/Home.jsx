import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Subcategory from '../Category/Subcategory';
import Gallery from '../../../components/Gallery';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Subcategory></Subcategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;