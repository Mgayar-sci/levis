import React from 'react'
import Navigation from '../navigation/Navigation'
import data from '../../../data';

import './header.scss';
import TopBar from '../topBar/TopBar';

const Header = () => {
    return (
        <header className='header fixed-top' >
            <TopBar />
            <Navigation
                brand={data.header.navigation.logo}
                menus={data.header.navigation.menus}
            />
        </header>
    )
}

export default Header