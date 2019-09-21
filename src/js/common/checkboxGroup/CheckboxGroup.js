import React from 'react';
import './checkbox-group.scss';

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
