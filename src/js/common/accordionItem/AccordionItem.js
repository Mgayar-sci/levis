import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import './accordion-item.scss';

export default function AccordionItem({ header, children, eventKey }) {
    return (
        <div className="accordion-item" >
            <Accordion.Toggle as={Button} variant="white" eventKey={eventKey}>
                {header}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {children}
                </Card.Body>
            </Accordion.Collapse>
        </div >

    )
}
