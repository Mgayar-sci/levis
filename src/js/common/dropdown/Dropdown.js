import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './dropdown.scss';

export default function DropdownMenu({
    variant, items, title, buttonClassName, id, rootClass, handleSelect, selectedItem
}) {

    return (
        <Dropdown className={`d-inline-block w-100 ${rootClass}`}>
            <Dropdown.Toggle variant={variant} className={`w-100 ${buttonClassName}`} id={id || 'dropdown-basic'}>
                <span className="dropdown-title">{title || selectedItem}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={`w-100 ${buttonClassName}`}>
                {items.map(i => (
                    <Dropdown.Item onClick={() => handleSelect(i)} key={i}>
                        {i}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

DropdownMenu.defaultProps = {
    variant:'transparent',
    items: [],
    rootClass: ''
};