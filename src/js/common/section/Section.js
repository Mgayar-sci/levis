import React from 'react';
import data from '../../../data';
import NavButton from '../navButton/NavButton';

import './section.scss';
import Box from '../box/Box';

const Section = (props) => {
    return (
        <Box
            backgroundImg={data.home.jeans.background}
            overlayCol="#ffffff94"
            className="section"
        >
            <div className="jeans">
                <p className="header">
                    {data.home.jeans.header}
                </p>
                <p className="main">
                    {data.home.jeans.main}
                </p>
                {data.home.jeans.links.map(({ label, route }, i) => (
                    <NavButton
                        route={route}
                        variant="white"
                        className="link"
                    >{label}</NavButton>))
                }
            </div>
        </Box>
    )
}

export default Section