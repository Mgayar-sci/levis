import React from 'react';

import './selectionSubmit.scss';
import DropdownMenu from '../dropdown/Dropdown';

export default function selectionSubmit({ handleSelect }) {
    return (
        <div className="selectionSubmit" >
            <div className="qty">
                <span>
                    Qty
                </span>
                <DropdownMenu
                    items={[1, 2, 3, 4, 5]}
                    handleSelect={handleSelect}
                />
            </div>
            <button>
                add To bag
            </button>
            <button>
                checkout
            </button>
        </div>
    )
}
