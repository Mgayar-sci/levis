import React from 'react';
import NavButton from '../navButton/NavButton';
import data from '../../../data';
import Box from '../box/Box';

import './ad.scss'


const Ad = (props) => {

    return (
        <Box
            height="75vh"
            backgroundImg={data.home.ad.background}
            overlayCol="#00000094"
        >
            <div className="ad-container">
                <p className="title">
                    {data.home.ad.header}
                </p>
                <p className="main">
                    {data.home.ad.main}
                </p>
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