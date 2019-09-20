import React from 'react';
import NavButton from '../navButton/NavButton';
import data from '../../../data';
import Box from '../box/Box';

import './ad.scss'


const Ad = (props) => {

    return (
        <Box
            height="75vh"
            backgroundImg={data.ad.background}
            overlayCol="#00000094"
        >
            <div className="ad-container">
                <p className="title">
                    {data.ad.header}
                </p>
                <p className="main">
                    {data.ad.main}
                </p>
                <p className="description">
                    {data.ad.description}
                </p>
                <NavButton
                    route={data.ad.link.route}
                    variant="primary"
                >
                    {data.ad.link.label}
                </NavButton>
            </div>
        </Box>
    )
}

export default Ad