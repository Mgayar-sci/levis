import React from 'react';
import { NavLink } from 'react-router-dom';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle';
import data from '../../../data';

import './top-bar.scss';

export default function TopBar() {
    return (
        <div className="tob-bar" >
            <ul className="links" >
                {
                    data.header.tobBar.links.map(({ route, label }) => <li className="link-item"><NavLink to={route} >{label}</NavLink></li>)
                }
            </ul>
            <div className="side-links" >
                <div className="side-link">
                    <NavLink to={data.header.tobBar.signIn} >
                        <BaseIcon size="md" color="secondary" icon={ic_account_circle} />
                        <span>Sign in</span>
                    </NavLink>
                </div>
                <div className="side-link">
                    <NavLink to={"/ar"} >
                        <img src={data.header.tobBar.ar} alt="ar" />
                    </NavLink>
                    <NavLink to={"/en"} >
                        <img src={data.header.tobBar.en} alt="en" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
