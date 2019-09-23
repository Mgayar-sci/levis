import React from 'react';
import Tag from '../tag/Tag';

import './filter.scss';

export default function Filter({ tags, clearItem, ClearAll }) {
    return (
        <div className="fliter" >
            <div className="tags-area">
                {
                    tags.map(({ parent, tags }) => tags.map((label) => (
                        <Tag
                            key={label}
                            label={label}
                            onClick={() => clearItem(parent, label)}
                        />)
                    ))
                }
            </div>
        </div>
    )
}
