import React from 'react';
import data from '../../../data';
import NavButton from '../../common/navButton/NavButton';

import './jeans.scss';
import Box from '../../common/box/Box';

const Jeans = (props) => {
    const style = {
        backgroundImage: `url(${data.jeans.background})`,
    };
    return (
        <Box height="75vh" style={style}>
            <div className="jeans">
                <p className="header">
                    {data.jeans.header}
                </p>
                <p className="main">
                    {data.jeans.main}
                </p>
                {data.jeans.links.map(({ label, route }, i) => <NavButton route={route} variant="seconadry" className="link" >{label}</NavButton>)
                }
            </div>
        </Box>
    )
}

export default Jeans