import React from 'react';
import './nav-button.scss';
import { NavLink } from 'react-router-dom';


const NavButton = ({ variant = "primary", outlined, route, children, fullWidth, className, ...otherProps }) => {
    const style = {
        width: fullWidth ? '100%' : 'auto',
    }
    const shape = outlined ? "button--outlined" : "";
    const type = `button--${variant}`;
    const classes = `${shape} ${type} ${className}`;

    return (
        <NavLink to={route}
            style={style}
            {...otherProps}
            className={`button ${classes}`}
        >
            {children}
        </NavLink>
    )
}


export default NavButton;