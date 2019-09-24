import React from 'react';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_close } from 'react-icons-kit/md/ic_close';

import './tag.scss';

export default function Tag({ label, onClick, onClose, close = true, square, disabled, selected }) {
    return (
        <div
            className={
                `tag ${
                square ? "square" : ""
                } ${
                disabled ? "crossed" : ""
                } ${
                selected ? "selected" : ""
                }`
            }
            onClick={!disabled ? onClick : () => { }}
        >
            <span className="tag-label" >
                {label}
            </span>
            {close && <BaseIcon className="tag-icon" icon={ic_close} color="red" size="sm" onClick={onClose} />}
        </div>
    )
}
