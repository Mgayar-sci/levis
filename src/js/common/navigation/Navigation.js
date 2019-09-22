import React from 'react';
import { Navbar } from 'react-bootstrap';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import BaseIcon from '../baseIcon/BaseIcon';
import './navigation.scss';
import InputAddon from '../InputAddon/InputAddon';
import { ic_search } from 'react-icons-kit/md/ic_search';
import NavMenu from '../navMenu/NavMenu';
import Menu from '../menu/Menu';
import { NavLink } from 'react-router-dom';

const Navigation = ({ brand, menus }) => {
  const verticalMenuItems = menus.map(({ title, route, color }) => ({ title, route, color }));
  return (
    <div className="navigation">
      <Navbar bg="white" expand="xl">
        <NavLink className="navbar-brand" to="/">
          <img src={brand} alt="logo" className="logo" />
        </NavLink>
        <div className="nav-container" >
          <div className="nav-left">
            <ul className="menu-horizontal" >
              {
                menus.map(({ items, title, color }, i) => <Menu key={i} items={items} title={title} color={color} />)
              }
            </ul>
            <NavMenu items={verticalMenuItems} className="menu-v" />
          </div>
          <div className="nav-right" >
            <div>
              <InputAddon placeholder="search" icon={ic_search} />
              <div className="cart-container" >
                <BaseIcon color="primary" icon={ic_shopping_cart} size="md" />
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation