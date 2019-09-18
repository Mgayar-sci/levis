import React from 'react';
import './banner.scss';

const Banner = ({ title, sub, background }) => {
    const style = {
        backgroundImage: `url(${background})`,
    };
    return (
        <div style={style} className="banner" >
            <p className="banner-title" >
                {title}
            </p>
            <p className="banner-subtitle" >
                {sub}
            </p>
        </div>
    )
}

export default Banner