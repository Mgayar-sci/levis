import React from 'react';
import Tag from '../tag/Tag';
import data from '../../../data';
import './selection-group.scss';
const Data = data.product.info.size.fit[0];

export default function SelectionGroup({ title = Data.title, elements = Data.choises, handleSelect }) {
    return (
        <div className="selection-group" >
            <h5>
                {title}
            </h5>
            <div className="selection-group-element">
                {
                    elements.map(({ label, value }) => (
                        <Tag
                            label={label}
                            close={false}
                            square crossed
                            onClick={() => { handleSelect(title, value) }}
                        />
                    ))
                }
            </div>
        </div>
    )
}
