import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Subcategory from '../Category/Subcategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Subcategory></Subcategory>
        </div>
    );
};

export default Home;