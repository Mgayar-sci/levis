import React from 'react';
import './banner.scss';
import Box from '../box/Box';

const Banner = ({ item: { title, sub, background } }) => {
    return (
        <Box
            backgroundImg={background}
            overlayCol="#00000094"
            className="banner"
        >
            <h2 className="banner-title" >
                {title}
            </h2>
            <sub className="banner-subtitle" >
                {sub}
            </sub>
        </Box>
    )
}

export default Banner