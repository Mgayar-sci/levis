import React from 'react';
import './category-card.scss';
import NavButton from '../navButton/NavButton';

const Categorycard = ({ img, route, label }) => {
    return (
        <section className="category-card">
            <img alt="category" className="category-img" src={img} />
            <NavButton variant="primary" outlined to={route} >
                {label}
            </NavButton>
        </section>
    )
}

export default Categorycard