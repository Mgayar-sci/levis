import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart'
import './navigation.scss';
import SearchForm from '../seachForm/SeachForm';
import Menu from '../menu/Menu';

const Navigation = ({ brand, menus }) => {
  return (
    <div className="navigation">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home">
          <img src={brand} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              menus.map(({ items, title, color }) => <Menu items={items} title={title} color={color} />)
            }
          </Nav>
          <SearchForm />
          <div className="cart-container" >
            <Icon icon={ic_shopping_cart} size={32} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation