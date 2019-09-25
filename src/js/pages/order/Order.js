import React from 'react'
import OrderForm from '../../common/OrderForm/OrderForm'
import { Row, Col } from 'react-bootstrap';

export default function Order() {
    return (
        <div className="order" >
            <Row>
                <Col sm={6} >
                    <OrderForm />
                </Col>
                <Col sm={6}>

                </Col>
            </Row>
        </div>
    )
}
