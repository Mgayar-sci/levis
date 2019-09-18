import React from 'react';
import './basic-button.scss';

const BasicButton = ({ type, children, fullWidth, className, ...otherProps }) => {
    const style = {
        width: fullWidth ? '100%' : 'inlien-block',
        background: type === "primary" ? `var(--secondary)` : `var(--primary)`,
    }
    return (
        <button style={style} {...otherProps} className={`btn-basic ${classname}`} >
            {children}
        </button>
    )
}


export default BasicButton;