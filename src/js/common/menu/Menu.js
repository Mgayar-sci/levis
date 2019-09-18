import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './menu.scss';
import MenuRow from './MenuRow';
const Menu = ({ items, title, color }) => {
    const style = {
        color: color || 'inherit'
    }
    return (
        <Dropdown>
            <Dropdown.Toggle style={style} variant="light" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className="menu-container">
                    {
                        items.map(({ title, links }) => {
                            return (
                                <MenuRow title={title} links={links} key={title} />
                            )
                        })
                    }
                </div>
            </Dropdown.Menu>
        </Dropdown>
    )
}




export default Menu