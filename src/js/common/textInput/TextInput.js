import React from 'react';
import { Form } from 'react-bootstrap';

export default function TextInput({ name, label, value, type = "text", placeholder, onChange, error }) {
    return (
        <Form.Group
            controlId={name}
            
        >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                size="lg"
                isValid={false}
            />
            <div className="error" >{error}</div>
        </Form.Group>
    )
}
