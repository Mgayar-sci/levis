import React from 'react';
import NavButton from '../navButton/NavButton';
import data from '../../../data';
import Box from '../box/Box';

import './ad.scss'


const Ad = (props) => {

    return (
        <Box
            backgroundImg={data.home.ad.background}
            overlayCol="#00000094"
            className="ad"
        >
            <div className="ad-container">
                <h2 className="title">
                    {data.home.ad.header}
                </h2>
                <sub className="main">
                    {data.home.ad.main}
                </sub>
                <p className="description">
                    {data.home.ad.description}
                </p>
                <NavButton
                    route={data.home.ad.link.route}
                    variant="primary"
                >
                    {data.home.ad.link.label}
                </NavButton>
            </div>
        </Box>
    )
}

export default Ad