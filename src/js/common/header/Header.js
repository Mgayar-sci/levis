import React from 'react'
import Navigation from '../navigation/Navigation'
import data from '../../../data';
import LinksCarousel from '../linksCarousel/LinksCarousel';
import Banner from '../banner/Banner';

const Header = () => {
    return (
        <header className='header' >
            <Navigation
                brand={data.header.navigation.logo}
                menus={data.header.navigation.menus}
            />
            <LinksCarousel items={data.header.carouselLinks} />
            <div className="my-5 container-fluid" >
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