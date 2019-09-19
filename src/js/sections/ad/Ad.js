import React from 'react';
import NavButton from '../../common/navButton/NavButton';
import data from '../../../data';

import './ad.scss'


const Ad = (props) => {

    const style = {
        backgroundImage: `url(${data.ad.background})`,
    };

    return (
        <div className="ad-container" style={style} >
            <div className="overlay">
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
                    className="w-25"
                    route={data.ad.link.route}
                    variant="primary"
                >
                    {data.ad.link.label}
                </NavButton>
            </div>
        </div>
    )
}

export default Ad