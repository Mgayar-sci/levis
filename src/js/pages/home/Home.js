import React from 'react';
import Header from '../../../js/sections/header/Header';
import Branches from '../../../js/sections/branches/Branches';
import Categories from '../../sections/categories/Categories';
import Ad from '../../sections/ad/Ad';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="my-5">
                <Branches />
            </div>
            <div className="my-5">
                <Categories />
            </div>
            <div className="my-5">
                <Ad />
            </div>
        </div>
    );
}

export default Home;