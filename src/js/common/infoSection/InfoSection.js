import React from 'react';
import './info-section.scss';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import SelectionGroup from '../selectionGroup/SelectionGroup';

export default function InfoSection({ title = "sizes", sideMenu = "size guide" }) {
    return (
        <div className="info-section" >
            <div className="info-section-header" >
                <h3>
                    {title}
                </h3>
                <a>
                    {sideMenu}
                </a>
            </div>
            <div className="info-section-main" >
                <SelectionGroup />
                {/*<SimpleGrid
                    items={[]}
                />*/}
            </div>
        </div>
    )
}
