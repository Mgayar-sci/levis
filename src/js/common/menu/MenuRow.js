import React from 'react';
import './menu-row.scss';

const MenuRow = ({ title, links }) => {
    return (
        <ul className="menu-row" >
            <li className="menu-title">
                {title}
            </li>
            {
                links.map(({ href, label }) => {
                    return (
                        <li key={href} >
                            <a href={href}>
                                {label}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuRow