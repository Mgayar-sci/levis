import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import Menu from '../menu/Menu';
import BaseIcon from '../baseIcon/BaseIcon';
import './navigation.scss';
import InputAddon from '../InputAddon/InputAddon';
import { ic_search } from 'react-icons-kit/md/ic_search';

const Navigation = ({ brand, menus }) => {
  return (
    <div className="navigation">
      <Navbar bg="white" expand="lg" fixed="top" >
        <Navbar.Brand href="#home">
          <img src={brand} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              menus.map(({ items, title, color }, i) => <Menu key={i} items={items} title={title} color={color} />)
            }
          </Nav>
          <InputAddon placeholder="search" icon={ic_search} />
          <div className="cart-container" >
            <BaseIcon color="primary" icon={ic_shopping_cart} size="md" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation