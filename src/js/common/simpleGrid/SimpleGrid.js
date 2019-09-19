import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './simple-grid.scss';

const SimpleGrid = ({ rowProps, gridProps, items = [] }) => {
    const sm = rowProps.sm || (items.lenght) / 12;
    return (
        <Container fluid >
            <Row {...gridProps} >
                {
                    items.map((i, index) => <Col {...rowProps} sm={sm} key={index} >{i}</Col>)
                }
            </Row>
        </Container>
    )
}



export default SimpleGrid;