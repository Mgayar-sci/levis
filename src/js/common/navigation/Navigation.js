import React from 'react';
import { Navbar } from 'react-bootstrap';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import BaseIcon from '../baseIcon/BaseIcon';
import './navigation.scss';
import InputAddon from '../InputAddon/InputAddon';
import { ic_search } from 'react-icons-kit/md/ic_search';
import Menu from '../menu/Menu';
import { NavLink } from 'react-router-dom';
import TopBar from '../topBar/TopBar';

const Navigation = ({ brand, menus }) => {
  return (
    <div className="navigation fixed-top">
      <TopBar />
      <Navbar bg="white" expand="xl">
        <NavLink className="navbar-brand" to="/">
          <img src={brand} alt="logo" className="logo" />
        </NavLink>
        <div className="nav-container flex-between" >
          <div className="nav-left">
            <ul className="menu-horizontal" >
              {
                menus.map(({ items, title, color }, i) => {
                  if (i > 4) {
                    return (
                      <Menu
                        key={i}
                        items={items}
                        title={title}
                        color={color}
                        right
                      />)
                  } else {
                    return (
                      <Menu
                        key={i}
                        items={items}
                        title={title}
                        color={color}
                      />)
                  }
                }
                )
              }
            </ul>
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