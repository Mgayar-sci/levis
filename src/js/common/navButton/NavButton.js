import React from 'react';
import './nav-button.scss';
import {NavLink} from 'react-router-dom';

const NavButton = ({ type = "primary",route, children, fullWidth, className, ...otherProps }) => {
    const style = {
        width: fullWidth ? '100%' : 'inlien-block',
        background: type === "primary" ? `var(--secondary)` : `var(--primary)`,
    }
    return (
        <NavLink to={route} style={style} {...otherProps} className={`btn btn-nav ${className}`} >
            {children}
        </NavLink>
    )
}


export default NavButton;