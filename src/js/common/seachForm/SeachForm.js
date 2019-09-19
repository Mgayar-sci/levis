import React from 'react';
import { InputGroup, Form, FormControl } from 'react-bootstrap';
import './search-form.scss';
import BaseIcon from '../baseIcon/BaseIcon';

const SearchForm = () => {
    return (
        <Form inline>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search"
                />
                <InputGroup.Append>
                    <button className="btn-search">
                        <BaseIcon icon={ic_search} color="primary" size="sm" />
                    </button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default SearchForm