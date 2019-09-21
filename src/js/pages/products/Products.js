import React from 'react';
import Title from '../../common/title/Title';
import data from '../../../data';
import './products.scss';
import ProductsSearch from '../../common/ProductsSearch/ProductsSearch';

const Products = (props) => {
    return (
        <div className="products container-fluid" >
            <div className="my-5">
                <Title title={data.products.header} background={data.products.background} />
            </div>
            <ProductsSearch />
        </div>
    )
}

export default Products