import React from 'react';
import './product-card.scss';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ img, link: { route, label }, dec, price, offer, currency }) {
    return (
        <div className="product-card" >
            <NavLink to={route} >
                <div className="view">
                    <div className="img">
                        <img src={img} alt="product" />
                    </div>
                    <div className="link">
                        <NavLink to={route} >
                            {label}
                        </NavLink>
                    </div>
                </div>
                <p className="info" >
                    {dec}
                </p>
                <p className={`info ${offer && "offer"}`} >
                    {price} {`  ${currency}`}
                </p>
            </NavLink>
        </div>
    )
}
