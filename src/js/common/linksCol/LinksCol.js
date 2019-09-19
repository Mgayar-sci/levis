import React from 'react';
import { NavLink } from 'react-router-dom';

import './links-col.scss'

const LinksCol = ({ header, links }) => {
    return (
        <div className="links-col" >
            <p className="header" >
                {header}
            </p>
            <ul className="links-list" >
                {
                    links.map(({ route, label }) => <NavLink className="link-item" route={route} >{label}</NavLink>)
                }
            </ul>
        </div>
    )
}

export default LinksCol