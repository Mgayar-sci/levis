import React from 'react';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_close } from 'react-icons-kit/md/ic_close';

import './tag.scss';

export default function Tag({ label, onClick }) {
    return (
        <div className="tag" >
            <span className="tag-label" >
                {label}
            </span>
            <BaseIcon className="tag-icon" icon={ic_close} color="red" size="sm" onClick={onClick} />
        </div>
    )
}
