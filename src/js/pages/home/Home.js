import React from 'react';
import Header from '../../../js/common/header/Header';
import Branches from '../../../js/common/branches/Branches';
import Categories from '../../common/categories/Categories';
import Ad from '../../common/ad/Ad';
import FinalTouch from '../../common/finalTouch/FinalTouch';
import Jeans from '../../common/jeans/Jeans';
import Trending from '../../common/trending/Trending';

import './home.scss';
import Footer from '../../common/footer/Footer';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="my-5 container-fluid">
                <Branches />
            </div>
            <div className="my-5 container-fluid">
                <Categories />
            </div>
            <div className="my-5 container-fluid">
                <Ad />
            </div>
            <div className="my-5 container-fluid">
                <FinalTouch />
            </div>
            <div className="my-5 container-fluid">
                <Jeans />
            </div>
            <div className="my-5 container-fluid">
                <Trending />
            </div>
            <Footer />
        </div>
    );
}

export default Home;