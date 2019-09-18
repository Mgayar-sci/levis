import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './simple-grid.scss';

const SimpleGrid = ({ rowProps, gridProps, items = [] }) => {
    const sm = rowProps.sm || (items.lenght) / 12;
    return (
        <Row {...gridProps} >
            {
                items.map((i) => <Col {...rowProps} sm={sm} >{i}</Col>)
            }
        </Row>
    )
}



export default SimpleGrid;