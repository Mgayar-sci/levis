import React from 'react';
import Tag from '../tag/Tag';
import './tags-area.scss';


export default function TagsArea({ tagsGroup, clearItem, className }) {
    return (
        <div className={`tags-area ${className}`}>
            {
                tagsGroup.map(({ parent, tags }) =>
                    tags.map((label) => (
                        <Tag
                            key={label}
                            label={label}
                            onClose={() => clearItem(parent, label)}
                        />)
                    ))
            }
        </div>
    )
}
