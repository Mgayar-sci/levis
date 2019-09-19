import React from 'react';
import Header from '../../../js/sections/header/Header';
import Branches from '../../../js/sections/branches/Branches';
import Categories from '../../sections/categories/Categories';
import Ad from '../../sections/ad/Ad';
import FinalTouch from '../../sections/finalTouch/FinalTouch';
import Jeans from '../../sections/jeans/Jeans';
import Trending from '../../sections/trending/Trending';
import { Container } from 'react-bootstrap';

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
            </div>
        </Container>
    );
}

export default Home;