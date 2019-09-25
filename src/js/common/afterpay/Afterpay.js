import React from 'react';
import { NavLink } from 'react-router-dom';

import './after-pay.scss';
import Box from '../box/Box';

export default function Afterpay({ link, logo, background ,text}) {
    return (
        <Box
            backgroundImg={background}
            overlayCol="#00000094"
            className="after-pay-container"
        >
            <div className="after-pay" >
                <NavLink to={link} >
                    <img src={logo} alt="logo"/>
                </NavLink>
                <p>
                   {text} 
                </p>
            </div>
        </Box>
    )
}
