import React from 'react'
import Navigation from '../../common/navigation/Navigation'
import data from '../../../data';
import LinksCarousel from '../../common/linksCarousel/LinksCarousel';
import Banner from '../../common/banner/Banner';

const Header = () => {
    return (
        <header className='header' >
            <Navigation
                brand={data.header.navigation.logo}
                menus={data.header.navigation.menus}
            />
            <LinksCarousel items={data.header.carouselLinks} />
            <div className="my-5" >
            <Banner
                title={data.header.banner.title}
                sub={data.header.banner.sub}
                background={data.header.banner.background}
            />
            </div>
        </header>
    )
}

export default Header