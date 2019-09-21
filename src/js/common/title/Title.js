import React from 'react';
import Box from '../box/Box';

import './title.scss'

const Title = ({ title, background }) => {
    return (
        <Box
            backgroundImg={background}
            overlayCol="#00000094"
            className="product-title"
        >
            <h1 className="title-text" >
                {title}
            </h1>
        </Box>
    )
}

export default Title