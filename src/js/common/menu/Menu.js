import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './menu.scss';
import MenuRow from './MenuRow';
const Menu = ({ items, title, color, right }) => {
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
                <Dropdown.Menu className={right && "right"} >
                    <div className="menu-container">
                        {
                            items.map(({ title, links }, i) => {
                                return (
                                    <Dropdown.Item key={i}>
                                        <MenuRow title={title} links={links} />
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