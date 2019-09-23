import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './product.scss';
import Gallery from '../../common/gallery/Gallery';

export default function Product() {
    return (
        <div className="product" >
            <Row>
                <Col sm={6} >
                    <Gallery />
                </Col>
                <Col sm={6} >
                </Col>
            </Row>
        </div>
    )
}
