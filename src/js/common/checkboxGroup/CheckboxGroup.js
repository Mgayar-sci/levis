import React from 'react';
import './checkbox-group.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_check } from 'react-icons-kit/md/ic_check';

import './checkbox-group.scss'

export default function CheckboxGroup({ label, name, onClick, checked }) {
    return (
        <div className="checkbox-group" >
            <input
                className="checkbox"
                name={name}
                onClick={({ target }) => onClick(target.name, target.checked)}
                type="checkbox"
                checked={checked}
                id={name}
            />
            <label className="label" htmlFor={name} >
                {label}
            </label>
        </div>
    )
}
