import React from 'react';

import './color-label.scss';

const ColorLabel = ({ label, num }) => (
    <div className="color-label">
        <div style={{ background: label }} className="color" />
        <div className="num" >{`[ ${num} ]`}</div>
    </div>
)

export default ColorLabel