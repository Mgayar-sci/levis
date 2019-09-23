import React from 'react';
import { InputGroup, Form, FormControl } from 'react-bootstrap';
import BaseIcon from '../baseIcon/BaseIcon';
import './input-addon.scss';

const InputAddon = ({ icon, placeholder, btnClass, inputClass, iconProps = {} }) => {
    return (
        <Form inline className="mb-3" >
            <InputGroup className={inputClass}  >
                <FormControl
                    placeholder={placeholder}
                />
                <InputGroup.Append>
                    <button className={`btn-addon ${btnClass}`}>
                        <BaseIcon icon={icon} color="silver" size="md" {...iconProps} />
                    </button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default InputAddon