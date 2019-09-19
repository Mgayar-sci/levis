import React from 'react';
import data from '../../../data';
import _chunk from 'lodash/chunk';
import BasicCarousel from '../../common/basicCarousel/BasicCarousel';
import TrendingCarouselList from '../../common/trendingcarousel/TrendingCarouselList';

import './trending.scss';
import { Container } from 'react-bootstrap';

const Trending = (props) => {
    const items = _chunk(data.trending.products, 6);
    return (
        <div className="tending" >
            <p className="header" >
                {data.trending.header}
            </p>
            <Container fluid >
                <BasicCarousel
                    items={items}
                    component={({ item }) => <TrendingCarouselList group={item} rowProps={{ sm: 2 }} />}
                />
            </Container>
        </div>
    )
}

export default Trending
