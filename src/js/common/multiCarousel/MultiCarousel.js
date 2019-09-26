import React from 'react';
import Media from 'react-media';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import BasicCarousel from '../basicCarousel/BasicCarousel';
import _chunk from 'lodash/chunk';

export default function MultiCarousel({ itemsData, sizes, Component }) {
    return (
        <div className="multi-carousel" >
            {
                sizes.map(({ maxWidth, minWidth, col, itemsPerView },i) => (
                    <Media key={i} query={{ maxWidth, minWidth }}>
                        {match => match && (
                            <BasicCarousel
                                items={_chunk(itemsData, itemsPerView)}
                                component={({item}) => (
                                    <SimpleGrid
                                        items={item}
                                        colProps={{
                                            xs: col
                                        }}
                                        Component={Component}
                                    />)}
                            />)}
                    </Media>
                ))
            }
        </div>
    )
}
