import React from 'react';
import Header from '../../../js/common/header/Header';
import Branches from '../../../js/common/branches/Branches';
import Categories from '../../common/categories/Categories';
import Ad from '../../common/ad/Ad';
import FinalTouch from '../../common/finalTouch/FinalTouch';
import Jeans from '../../common/jeans/Jeans';
import Trending from '../../common/trending/Trending';
import { Container } from 'react-bootstrap';

import './home.scss';
import Footer from '../../common/footer/Footer';

function Home() {
    return (
        <Container fluid>
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
                <div className="my-5">
                    <FinalTouch />
                </div>
                <div className="my-5">
                    <Jeans />
                </div>
                <div className="my-5">
                    <Trending />
                </div>
                <Footer />
            </div>
        </Container>
    );
}

export default Home;