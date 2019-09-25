import React from 'react';
import './info-section.scss';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import SelectionGroup from '../selectionGroup/SelectionGroup';
import data from '../../../data';

export default function InfoSection({ title, handleSelect, sideMenu, selectedItems }) {
    const selectionGroupItems =
        data.product.info.size.fit.map((i) => ({ ...i, handleSelect, selectedItems }))
    return (
        <div className="info-section" >
            <div className="info-section-header" >
                <h3>
                    {title}
                </h3>
                <p>
                    {sideMenu}
                </p>
            </div>
            <div className="info-section-main" >
                {<SimpleGrid
                    items={selectionGroupItems}
                    Component={SelectionGroup}
                    colProps={{
                        sm: 12,
                        md: 6
                    }}
                />}
            </div>
        </div>
    )
}
