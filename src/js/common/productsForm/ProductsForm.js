import React from 'react'
import BasicCollapse from '../collapse/BasicCollapse';
import CheckboxGroup from '../checkboxGroup/CheckboxGroup';
import ColorLabel from '../colorLabel/ColorLabel';

import './products-form.scss';


const ProductsForm = ({ formInputs, handleSelect, formState }) => {
    return (
        <div className="products-form" >
            {
                formInputs.map(({ title, inputGroup, color }) => (
                    <div className="products-form-group" key={title} >
                        <BasicCollapse defaultOpen header={title} >
                            {
                                inputGroup.map(({ name, num }) => {
                                    if (color) {
                                        return (
                                            <CheckboxGroup
                                                label={<ColorLabel label={name} num={num} />}
                                                name={name}
                                                onClick={handleSelect(title)}
                                                checked={formState && formState[title].includes(name)}
                                            />
                                        )
                                    } else {
                                        return (
                                            <CheckboxGroup
                                                label={`${name} [ ${num} ]`}
                                                name={name}
                                                onClick={handleSelect(title)}
                                                checked={formState && formState[title].includes(name)}
                                            />)
                                    }
                                })
                            }
                        </BasicCollapse>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductsForm