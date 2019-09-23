import React from 'react';
import BasicCollapse from '../collapse/BasicCollapse';
import { NavLink } from 'react-router-dom';

import './side-menu-item.scss';

export default function SideMenuItem({ links, header, defaultOpen, onClick }) {
    return (
        <div className="side-menu-item" >
            <BasicCollapse defaultOpen={defaultOpen} header={header} >
                <ul>
                    {links.map(({ label, route }) => (
                        <li className="item" >
                            <NavLink className="link" to={route} onClick={onClick} >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </BasicCollapse>
        </div>
    )
}
