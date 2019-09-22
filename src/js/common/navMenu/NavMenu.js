import React from 'react';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

import './nav-menu.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(({ show }) => ({ show: !show }))
    }

    render() {
        const { show } = this.state
        return (
            <div className={this.props.className}>
                {!show && <button
                    className="btn btn-open"
                    onClick={this.toggleMenu}
                >
                    <BaseIcon color="primary" icon={ic_menu} size="md" />
                </button>}
                <div className={`menu-vertical ${show && "show"}`} >
                    <div className="overlay" onClick={this.toggleMenu} />
                    <nav className='menu-container'>
                        <ul className="menus-list" >
                            <li className="button-item" >
                                <button
                                    className="btn btn-close"
                                    onClick={this.toggleMenu}
                                >
                                    <BaseIcon color="primary" className="" icon={ic_close} size="md" />
                                </button>
                            </li>
                            {
                                this.props.items.map(({ title, route, color }, i) =>
                                    <NavLink
                                        key={i}
                                        className="link-item"
                                        style={{ color: color || "var(--primary)" }}
                                        to={route}
                                        onClick={this.toggleMenu}
                                    >
                                        {title}
                                    </NavLink>)
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavMenu