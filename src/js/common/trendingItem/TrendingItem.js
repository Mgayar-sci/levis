import React from 'react';

import './trending-item.scss';
import {NavLink} from 'react-router-dom';

const TrendingItem = ({ route, img }) => {
    return (
        <div className="trending-item" >
            <NavLink to={route} >
                <img src={img} alt="product" className="img" />
            </NavLink>
        </div>
    )
}

export default TrendingItem