import React from 'react';
import { InputGroup, Form, FormControl } from 'react-bootstrap';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { Icon } from 'react-icons-kit';
import './search-form.scss';

const SearchForm = () => {
    return (
        <Form inline>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search"
                />
                <InputGroup.Append>
                    <button className="btn-search">
                        <Icon icon={ic_search} size={20} />
                    </button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default SearchForm