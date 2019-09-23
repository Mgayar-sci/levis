import React from 'react'
import BaseIcon from '../baseIcon/BaseIcon'
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';
import { ic_share } from 'react-icons-kit/md/ic_share'

export default function ProductInfo({ title, id, price, currency, variant: { title, imgs } }) {
    return (
        <div className="product-info" >
            <div className="product-info-header" >
                <h1 className="product-info-title" >
                    {title}
                </h1>
                <p className="product-info-id" >
                    ItemNO.{id}
                </p>
            </div>
            <div className="product-info-icons" >
                <BaseIcon size="mg" className="favorite" color="red" icon={ic_favorite_border} />
                <BaseIcon size="mg" className="favorite" color="grey" icon={ic_share} />
            </div>
            <p className="product-info-price" >
                {price}{` ${currency}`}
            </p>
            <div className="variant">
                <h3 className="variant-title" >
                    {title}
                </h3>
                <ul>
                    {
                        imgs.map((src, i) => <img className="variant-img" src={src} alt={title} key={i} />)
                    }
                </ul>
            </div>
        </div>
    )
}
