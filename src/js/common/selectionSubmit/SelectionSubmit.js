import React from 'react';
import DropdownMenu from '../dropdown/Dropdown';

import './selection-submit.scss';

export default function SelectionSubmit({ handleSelect, selectedItems }) {
    return (
        <div className="selectionSubmit flex-start" >
            <div className="qty">
                <span>
                    Qty
                </span>
                <DropdownMenu
                    items={[1, 2, 3, 4, 5]}
                    handleSelect={(val) => handleSelect('qty', val)}
                    selectedItem={selectedItems['qty']}
                    rootClass="mx-2"
                />
            </div>
            <button className="button button--white btn mx-2" >
                add To bag
            </button>
            <button className="btn button button--secondary mx-2 " >
                checkout
            </button>
        </div>
    )
}
