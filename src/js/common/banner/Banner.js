import React from 'react';
import './banner.scss';

const Banner = ({ title, sub, background }) => {
    const style = {
        backgroundImage: `url(${background})`,
    };
    return (
        <section style={style} className="banner" >
            <h2 className="banner-title" >
                {title}
            </h2>
            <sub className="banner-subtitle" >
                {sub}
            </sub>
        </section>
    )
}

export default Banner