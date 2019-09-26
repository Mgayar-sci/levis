import React from 'react';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

import BaseIcon from '../baseIcon/BaseIcon';
import { NavLink } from 'react-router-dom';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import './nav-menu.scss';
import SideMenuItem from '../sideMenuItem/SideMenuItem';
import data from '../../../data';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            sideLinks: [],
            sideOpen: false,
            header: ''
        }
        this.showSideMenu = this.showSideMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.hideSideMenu = this.hideSideMenu.bind(this);
    }

    handleCloseMenu() {
        this.setState({ open: false });
        this.hideSideMenu();
    }

    handleOpenMenu() {
        this.setState({ open: true })
    }

    showSideMenu(header, links) {
        this.setState({ sideLinks: links, header, sideOpen: true })
    }

    hideSideMenu() {
        this.setState({ sideLinks: [], header: "", sideOpen: false })
    }

    render() {
        const { items, className, signIn = "/signin", extra } = this.props;
        const { handleCloseMenu, handleOpenMenu, showSideMenu, hideSideMenu, state: { open, sideLinks, header, sideOpen } } = this;

        return (
            <div className={`${className} nav-menu`}>
                <button
                    className="btn btn-open"
                    onClick={handleOpenMenu}
                >
                    <BaseIcon color="primary" icon={ic_menu} size="md" />
                </button>
                <div
                    className={
                        `menu-vertical ${open && "show"} ${sideOpen && "show-side"}`
                    }
                >
                    <div className="overlay" onClick={handleCloseMenu} />
                    <div className="menu-body" >
                        <nav className='main-menu'>
                            <ul className="menus-list" >
                                <li className="button-item" >
                                    <button
                                        className="btn btn-close"
                                        onClick={handleCloseMenu}
                                    >
                                        <BaseIcon
                                            color="white"
                                            className=""
                                            icon={ic_close}
                                            size="md"
                                        />
                                    </button>
                                </li>
                                <li className="sign-in" onClick={handleCloseMenu} >
                                    <NavLink to={signIn} >
                                        <BaseIcon
                                            size="md"
                                            color="white"
                                            icon={ic_account_circle}
                                        />
                                        <span>Sign in</span>
                                    </NavLink>
                                </li>
                                {
                                    items.map(({ title, route, color, items }, i) => (
                                        <div
                                            key={i}
                                            className="link-item flex-between"
                                            style={{ color: color || "var(--primary)" }}
                                            to={route}
                                            onClick={() => showSideMenu(title, items)}
                                        >
                                            <span>
                                                {title}
                                            </span>
                                            <BaseIcon
                                                size="md"
                                                color="primary"
                                                icon={ic_keyboard_arrow_right}
                                            />
                                        </div>))
                                }
                                <li>
                                    <ul className="extra-links" >
                                        {extra.map(({ label, route },i) => (
                                            <li key={i} >
                                                <NavLink to={route} >
                                                    {label}
                                                </NavLink>
                                            </li>
                                        ))}
                                        <li className="language" >
                                            <NavLink to={"/ar"} >
                                                <img src={data.header.tobBar.ar} alt="ar" />
                                            </NavLink>
                                            <NavLink to={"/en"} >
                                                <img src={data.header.tobBar.en} alt="en" />
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className="side-menu" >
                            <ul className="menus-list" >
                                <li className="side-menu-header flex-between " >
                                    <BaseIcon
                                        color="white"
                                        className=""
                                        icon={ic_keyboard_arrow_left}
                                        size="md"
                                        onClick={hideSideMenu}
                                    />
                                    <span>
                                        {header}
                                    </span>
                                    <BaseIcon
                                        color="white"
                                        className=""
                                        icon={ic_close}
                                        size={28}
                                        onClick={handleCloseMenu}
                                    />
                                </li>
                                {
                                    sideLinks.map(({ links, title }, i) => {
                                        return <SideMenuItem
                                            key={i}
                                            defaultOpen={i < 1}
                                            links={links}
                                            header={title}
                                            onClick={handleCloseMenu}
                                        />
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        )
    }

}

export default NavMenu