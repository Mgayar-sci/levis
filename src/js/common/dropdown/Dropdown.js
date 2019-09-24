import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './dropdown.scss';

export default function DropdownMenu({
    variant, items, title, buttonClassName, id, rootClass, handleSelect, selectedItem, right
}) {

    return (
        <Dropdown className={`d-inline-block ${rootClass}`}>
            <Dropdown.Toggle variant={variant} className={`${buttonClassName}`} id={id || 'dropdown-basic'}>
                <span className="dropdown-title">{title || selectedItem}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={`${buttonClassName} ${right && "right"}`}>
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
    variant: 'transparent',
    items: [],
    rootClass: ''
};