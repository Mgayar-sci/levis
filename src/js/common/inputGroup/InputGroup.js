import React from 'react';

import './input-group.scss';
import Collapse from '../collapse/Collapse';

export default function InputGroup({ title, group }) {
    return (
        <div className="input-group" >
            <Collapse
                key={title}
                header={}
            >
            </Collapse>
        </div>
    )
}
