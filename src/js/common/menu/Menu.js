import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './menu.scss';
import MenuRow from './MenuRow';
const Menu = ({ items, title, color }) => {
    const style = {
        color: color || 'inherit'
    }
    return (
        <div className="menu">
            <Dropdown>
                <Dropdown.Toggle
                    style={style}
                    variant="light"
                    id="dropdown-basic"
                >
                    {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className="menu-container">
                        {
                            items.map(({ title, links }, i) => {
                                return (
                                    <Dropdown.Item>
                                        <MenuRow title={title} links={links} key={i} />
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}




export default Menu