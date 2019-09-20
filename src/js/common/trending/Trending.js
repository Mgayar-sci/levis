import React from 'react';
import data from '../../../data';
import { Container } from 'react-bootstrap';
import TrendingCarousel from '../trendingcarousel/TrendingCarousel';
import Media from 'react-media';

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
            <p className="header" >
                {data.trending.header}
            </p>
            <Container fluid >
                {
                    sizes.map(({ maxWidth, minWidth, col, itemsPerView }) => (
                        <Media query={{ maxWidth, minWidth }}>
                            {match => match && (
                                <TrendingCarousel
                                    col={col}
                                    items={data.trending.products}
                                    itemsPerView={itemsPerView}
                                />)}
                        </Media>
                    ))
                }
            </Container>
        </div>
    )
}

export default Trending
