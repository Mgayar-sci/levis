import React, { Component } from 'react'

import './product-info.scss';
import ProductHeader from '../productHeader/ProductHeader';
import InfoSection from '../infoSection/InfoSection';
import SelectionSubmit from '../selectionSubmit/SelectionSubmit';


export default class ProductInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSelectItem(target, value) {
        this.setState({
            [target]: value
        })
    }

    render() {
        const { title, id, price, currency, variants } = this.props;

        return (
            <div className="product-info" >
                <div className="product-section" >
                    <ProductHeader
                        title={title}
                        id={id}
                        price={price}
                        currency={currency}
                        variants={variants}
                        selectedVariant={this.state.color}
                        selectItem={this.handleSelectItem}
                    />
                </div>
                <div className="product-section" >
                    <InfoSection
                        title="sizes"
                        sideMenu="size guide"
                        handleSelect={this.handleSelectItem}
                        selectedItems={this.state}
                    />
                </div>
                <div className="product-section">
                    <SelectionSubmit
                        handleSelect={this.handleSelectItem}
                        selectedItems={this.state}
                    />
                </div>
            </div>
        )
    }
}





