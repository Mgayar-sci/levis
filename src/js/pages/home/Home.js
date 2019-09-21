import React from 'react';
import Branches from '../../../js/common/branches/Branches';
import Categories from '../../common/categories/Categories';
import Ad from '../../common/ad/Ad';
import FinalTouch from '../../common/finalTouch/FinalTouch';
import Jeans from '../../common/section/Section';
import Trending from '../../common/trending/Trending';
import Banner from '../../common/banner/Banner';
import LinksCarousel from '../../common/linksCarousel/LinksCarousel';
import data from '../../../data';

import './home.scss';

function Home() {
    return (
        <main className="home">
            <LinksCarousel items={data.home.carouselLinks} />
            <div className="my-5 container-fluid" >
                <Banner
                    title={data.home.banner.title}
                    sub={data.home.banner.sub}
                    background={data.home.banner.background}
                />
            </div>
            <div className="my-5 container-fluid">
                <Branches />
            </div>
            <div className="my-5 container-fluid">
                <Categories />
            </div>
            <div className="my-5 container-fluid">
                <Ad />
            </div>
            <div className="my-5 container-fluid">
                <FinalTouch />
            </div>
            <div className="my-5 container-fluid">
                <Jeans />
            </div>
            <div className="my-5 container-fluid">
                <Trending />
            </div>
        </main>
    );
}

export default Home;