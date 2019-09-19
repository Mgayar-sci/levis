import React from 'react';
import './box.scss';

const Box = ({ height, style, children, ...otherProps }) => {
    const styles = {
        height: height,
        ...style
    }
    return (
        <div className="box" style={styles} {...otherProps}  >
            {children}
        </div>
    )
}

export default Box