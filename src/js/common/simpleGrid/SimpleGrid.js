import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './simple-grid.scss';

const SimpleGrid = ({ colProps, gridProps, items = [], Component }) => {
    return (
        <Container fluid >
            <Row {...gridProps} >
                {
                    items.map((i, index) => (
                        <Col {...colProps} key={index} >
                            {Component ? <Component {...i} /> : i}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}



export default SimpleGrid;