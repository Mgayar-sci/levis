import React from 'react';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import TrendingItem from './TrendingItem';


const TrendingCarouselList = ({ group = [], colProps = {} }) => {
    const items = group.map((i) => <TrendingItem {...i} />)
    return (
        <SimpleGrid
            items={items}
            colProps={colProps}
        />
    )
}

export default TrendingCarouselList