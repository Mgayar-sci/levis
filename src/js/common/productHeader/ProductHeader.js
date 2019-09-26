import React from 'react';
import BaseIcon from '../baseIcon/BaseIcon'
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';
import { ic_share } from 'react-icons-kit/md/ic_share';

import './product-header.scss';

export default function ProductHeader({
    title, id, price, currency, variants, selectedVariant, selectItem,
    onLike, onShare
}) {
    return (
        <div className="product-header" >
            <div className="product-header-container" >
                <div className="product-header-main" >
                    <h1 className="text-main" >
                        {title}
                    </h1>
                    <p className="product-header-id" >
                        ItemNO.{id}
                    </p>
                </div>
                <div className="product-header-icons" >
                    <BaseIcon
                        size="md"
                        className="favorite"
                        color="secondary"
                        icon={ic_favorite_border}
                        onClick={onLike}
                    />
                    <BaseIcon
                        size="md"
                        className="favorite"
                        color="silver"
                        icon={ic_share}
                        onClick={onShare}
                    />
                </div>
            </div>
            <p className="text-main" >
                {price}{` ${currency}`}
            </p>
            <div className="variants">
                <h3 className="variants-title" >
                    {variants.title}
                </h3>
                <ul className="variants-list" >
                    {
                        variants.choises.map(({ img, value }, i) => (
                            <li
                                key={i}
                                className={`variant-choise ${selectedVariant === value && "selected"} `}
                                onClick={() => selectItem(variants.title, value)}
                            >
                                <img
                                    className="variant-img"
                                    src={img}
                                    alt={title}
                                    width="100%"
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
