import React from 'react'
import Navigation from '../navigation/Navigation'
import data from '../../../data';
import Media from 'react-media'
import './header.scss';
import MobileNav from '../mobileNav/MobileNav';


const Header = () => {
    return (
        <header className='header' >
            <Media query={{ minWidth: 1081 }}>
                <Navigation
                    brand={data.header.navigation.logo}
                    menus={data.header.navigation.menus}
                />
            </Media>
            <Media query={{ maxWidth: 1080 }}>
                <MobileNav
                    logo={data.header.navigation.logo}
                    menus={data.header.navigation.menus}
                    extra={data.header.tobBar.links}
                />
            </Media>
        </header>
    )
}

export default Header