import React from 'react';
import _chunk from 'lodash/chunk';
import BasicCarousel from '../basicCarousel/BasicCarousel';
import TrendingCarouselList from '../trendingcarousel/TrendingCarouselList';


const TrendingCarousel = ({ items, itemsPerView, col }) => {
    const list = _chunk(items, itemsPerView);
    return (
        <BasicCarousel
            items={list}
            component={({ item }) => (
                <TrendingCarouselList
                    group={item}
                    colProps={{ xs: col }}
                />)}
        />
    )
}

export default TrendingCarousel
