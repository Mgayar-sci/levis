import React from 'react';
import { NavLink } from 'react-router-dom';
import './category-card.scss';

const Categorycard = ({ img, route, label }) => {
    return (
        <div className="category-card">
            <img alt="category" className="category-img" src={img} />
            <NavLink to={route} className="link"  >
                {label}
            </NavLink>
        </div>
    )
}

export default Categorycard