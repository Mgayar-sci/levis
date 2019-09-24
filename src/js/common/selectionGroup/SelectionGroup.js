import React from 'react';
import Tag from '../tag/Tag';
import './selection-group.scss';
import { Tooltip } from 'react-bootstrap';

export default function SelectionGroup({ title, choises, handleSelect, selectedItems }) {
    return (
        <div className="selection-group" >
            <h5>
                {title}
            </h5>
            <div className="selection-group-element">
                {
                    choises.map(({ label, value, out }, i) => (
                        <Tag
                            key={i}
                            label={label}
                            close={false}
                            square
                            disabled={out}
                            onClick={() => { handleSelect(title, value) }}
                            selected={selectedItems[title] === value}
                        />
                    ))
                }
            </div>
        </div>
    )
}
