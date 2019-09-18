import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './simple-grid.scss';

const SimpleGrid = ({ rowProps, gridProps, items = [] }) => {
    const sm = rowProps.sm || (items.lenght) / 12;
    return (
        <Grid {...gridProps} >
            {
                items.map((i) => <Row {...rowProps} sm={sm} >{i}</Row>)
            }
        </Grid>
    )
}



export default SimpleGrid;