import React from 'react'
import BasicCollapse from '../collapse/BasicCollapse';
import CheckboxGroup from '../checkboxGroup/CheckboxGroup';

import './products-form.scss';

const ProductsForm = ({ formInputs, handleSelect, formState }) => {
    console.log(formState);
    return (
        <div className="products-form" >
            {
                formInputs.map(({ title, inputGroup }) => (
                    <div className="products-form-group" key={title} >
                        <BasicCollapse defaultOpen header={title} >
                            {
                                inputGroup.map(({ name, no }) => (
                                    <CheckboxGroup
                                        label={`${name} [ ${no} ]`}
                                        name={name}
                                        onClick={handleSelect(title)}
                                        checked={formState && formState[title].includes(name)}
                                    />
                                ))
                            }
                        </BasicCollapse>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductsForm