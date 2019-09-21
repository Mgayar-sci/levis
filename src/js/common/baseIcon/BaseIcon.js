import React from 'react';
import { Icon } from 'react-icons-kit';
import data from '../../../data';


const colors = data.theme

const sizes = {
    sm:20,
    md:32,
    lg:50
}

const BaseIcon = ({ color, size, icon, ...otherProps }) => {
    const siz = typeof size === "string" ? sizes[size] : size;
    const colr = colors[color]||color
    const style = {
        color:colr,
    }
    return (
        <Icon style={style} size={siz} icon={icon} {...otherProps} />
    )
}

export default BaseIcon