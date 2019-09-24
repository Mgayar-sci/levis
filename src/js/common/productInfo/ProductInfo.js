import React, { Component } from 'react'
import BaseIcon from '../baseIcon/BaseIcon'
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';
import { ic_share } from 'react-icons-kit/md/ic_share';

import './product-info.scss';


export default class ProductInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.variants.choises[0].value
        }
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSelectItem(target, value) {
        this.setState({
            [target]: value
        })
    }

    render() {
        const { title, id, price, currency, variants, selectedData } = this.props;

        return (
            <div className="product-info" >
                <div className="product-info-header" >
                    <div className="product-info-main" >
                        <h1 className="text-main" >
                            {title}
                        </h1>
                        <p className="product-info-id" >
                            ItemNO.{id}
                        </p>
                    </div>
                    <div className="product-info-icons" >
                        <BaseIcon
                            size="md"
                            className="favorite"
                            color="red"
                            icon={ic_favorite_border}
                        />
                        <BaseIcon
                            size="md"
                            className="favorite"
                            color="silver"
                            icon={ic_share}
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
                                    className={`variant-choise ${this.state[variants.title] === value && "selected"} `}
                                    onClick={() => this.handleSelectItem(variants.title, value)}
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
}





