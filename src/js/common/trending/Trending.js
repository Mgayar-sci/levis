import React from 'react';
import data from '../../../data';
import { Container } from 'react-bootstrap';
import TrendingItem from '../trendingItem/TrendingItem';
import MultiCarousel from '../multiCarousel/MultiCarousel';

import './trending.scss';

const sizes = [
    {
        minWidth: 0,
        maxWidth: 400,
        col: 12,
        itemsPerView: 1
    }, {
        minWidth: 401,
        maxWidth: 600,
        col: 6,
        itemsPerView: 2
    }, {
        minWidth: 601,
        maxWidth: 900,
        col: 4,
        itemsPerView: 3
    }, {
        minWidth: 901,
        maxWidth: 1200,
        col: 3,
        itemsPerView: 4
    }, {
        minWidth: 1201,
        maxWidth: 50000,
        col: 2,
        itemsPerView: 6
    }
]

const Trending = (props) => {
    return (
        <div className="tending" >
            <p className="tending-header" >
                {data.home.trending.header}
            </p>
            <Container fluid >
                <MultiCarousel
                    itemsData={data.home.trending.products}
                    sizes={sizes}
                    Component={TrendingItem}
                />
            </Container>
        </div>
    )
}

export default Trending
