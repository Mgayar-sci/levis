import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './product.scss';
import Gallery from '../../common/gallery/Gallery';
import ProductInfo from '../../common/productInfo/ProductInfo';
import data from '../../../data';

const { currency, id, price, title, variants } = data.product.info;

export default function Product() {
    return (
        <div className="product container-fluid" >
            <Row>
                <Col sm={6} >
                    <Gallery />
                </Col>
                <Col sm={6} >
                    <ProductInfo
                        currency={currency}
                        id={id}
                        price={price}
                        title={title}
                        variants={variants}
                    />
                </Col>
            </Row>
        </div>
    )
}
