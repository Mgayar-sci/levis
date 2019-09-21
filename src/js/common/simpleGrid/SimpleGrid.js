import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './simple-grid.scss';

const SimpleGrid = ({ colProps, gridProps, items = [], Component }) => {
    const sm = colProps.sm || (items.lenght) / 12;
    return (
        <Container fluid >
            <Row {...gridProps} >
                {
                    items.map((i, index) => (
                        <Col {...colProps} sm={sm} key={index} >
                            {Component ? <Component {...i} /> : i}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}



export default SimpleGrid;