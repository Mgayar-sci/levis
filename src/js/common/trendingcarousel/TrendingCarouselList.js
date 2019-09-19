import React from 'react';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import TrendingItem from './TrendingItem';


const TrendingCarouselList = ({ group = [], rowProps = {} }) => {
    const items = group.map((i) => <TrendingItem {...i} />)
    return (
        <SimpleGrid
            items={items}
            rowProps={rowProps}
        />
    )
}

export default TrendingCarouselList