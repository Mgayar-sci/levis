import React, { Component } from 'react';
import { Card, Accordion, Button, Row, Col } from 'react-bootstrap';
import './order-form.scss';
import AccordionItem from '../accordionItem/AccordionItem';
import TextInput from '../textInput/TextInput';

export default class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="order-form" >
                <Accordion defaultActiveKey="0">
                    <AccordionItem header="Shopping" >
                        <TextInput
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.name}
                            placeholder="please enter your name"
                            error="sayed"
                        />
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }
}
