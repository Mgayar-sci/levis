import React from 'react';
import { Icon } from 'react-icons-kit';
import data from '../../../data';


const colors = data.theme

const sizes = {
    sm: 27,
    md: 32,
    lg: 50
}

const BaseIcon = ({ color, size, icon, style, ...otherProps }) => {
    const siz = typeof size === "string" ? sizes[size] : size;
    const colr = colors[color] || color
    const Style = {
        color: colr,
        ...style
    }
    return (
        <Icon style={Style} size={siz} icon={icon} {...otherProps} />
    )
}

export default BaseIcon