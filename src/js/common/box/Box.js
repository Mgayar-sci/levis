import React from 'react';
import './box.scss';

const Box = ({ height, style, children, backgroundImg, overlayCol, className, ...otherProps }) => {
    const styles = {
        height: height,
        backgroundImage: `url(${backgroundImg})`,
        backgroundColor: overlayCol,
        backgroundBlendMode: "overlay",
        ...style
    }
    return (
        <div className={`box ${className}`} style={styles} {...otherProps}  >
            {children}
        </div>
    )
}

export default Box