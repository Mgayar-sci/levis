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
            <article className="jeans">
                <h2 className="header">
                    {data.home.jeans.header}
                </h2>
                <sub className="main">
                    {data.home.jeans.main}
                </sub>
                {data.home.jeans.links.map(({ label, route }, i) => (
                    <NavButton
                        route={route}
                        variant="white"
                        className="link"
                        key={i}
                    >
                        {label}
                    </NavButton>
                ))
                }
            </article>
        </Box>
    )
}

export default Section