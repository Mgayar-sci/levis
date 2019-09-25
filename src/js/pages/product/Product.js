import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './product.scss';
import Gallery from '../../common/gallery/Gallery';
import ProductInfo from '../../common/productInfo/ProductInfo';
import data from '../../../data';
import Description from '../../common/description/Description';
import { NavLink } from 'react-router-dom';
import MultiCarousel from '../../common/multiCarousel/MultiCarousel';
import TrendingItem from '../../common/trendingItem/TrendingItem';
import Afterpay from '../../common/afterpay/Afterpay';

const { currency, id, price, title, variants, description, afterpay } = data.product.info;

const sizes = [
    {
        minWidth: 0,
        maxWidth: 500,
        col: 12,
        itemsPerView: 1
    }, {
        minWidth: 501,
        maxWidth: 800,
        col: 6,
        itemsPerView: 2
    }, {
        minWidth: 801,
        maxWidth: 50000,
        col: 4,
        itemsPerView: 3
    }
]


export default function Product() {
    return (
        <div className="product container-fluid" >
            <Row>
                <Col sm={12} md={12} lg={6} >
                    <Gallery />
                </Col>
                <Col sm={12} md={12} lg={6} >
                    <ProductInfo
                        currency={currency}
                        id={id}
                        price={price}
                        title={title}
                        variants={variants}
                    />
                </Col>
                <Col sm={12} >
                    <div className="my-5" >
                        <Description data={description} />
                    </div>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} >
                            <Afterpay
                                link="/"
                                logo={afterpay.logo}
                                background={afterpay.background}
                                text={afterpay.text}
                            />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} >
                            <h2>Recommended for you</h2>
                            <MultiCarousel
                                itemsData={data.home.trending.products}
                                sizes={sizes}
                                Component={TrendingItem}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
