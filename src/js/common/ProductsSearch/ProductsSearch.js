import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsForm from '../productsForm/ProductsForm';
import data from '../../../data';


import './products-search.scss';
import ProductCard from '../productCard/ProductCard';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import DropdownMenu from '../dropdown/Dropdown';
import Filter from '../filter/Filter';

class ProductsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterItems: this.getInitialState(),
            sort: 'price low to high'
        }
        this.handleClearAll = this.handleClearAll.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleTagClick = this.handleTagClick.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }


    getInitialState() {
        const initialState = {};
        data.products.search.forEach(({ title }) => initialState[title] = [])
        return initialState
    }

    handleSelect(parent) {
        return (name) => {
            const { state: { filterItems } } = this;
            if (filterItems[parent].includes(name)) {
                this.setState({
                    filterItems: {
                        ...filterItems,
                        [parent]: filterItems[parent].filter((i) => i !== name)
                    }
                })
            } else {
                this.setState({
                    filterItems: {
                        ...filterItems,
                        [parent]: [...filterItems[parent], name]
                    }
                })
            }
        }
    }

    handleTagClick(parent, label) {
        this.handleSelect(parent)(label)
    }

    handleClearAll() {
        this.setState({ filterItems: this.getInitialState() })
    }

    handleSort(value) {
        this.setState({ sort: value })
    }

    render() {
        const { filterItems, sort } = this.state;
        const selectedTags = Object.keys(filterItems)
            .map((key) => ({ parent: key, tags: filterItems[key] }));
        return (
            <div className="products-search">
                <Container fluid >
                    <Row>
                        <Col xs={12} sm={12} md={3}>
                            <h2 className="search-title" >
                                {data.products.searchTitle}
                            </h2>
                            <ProductsForm
                                formInputs={data.products.search}
                                handleSelect={this.handleSelect}
                                formState={filterItems}
                            />
                        </Col>
                        <Col xs={12} sm={12} md={9}>
                            <div className="results" >
                                <div className="results-header flex-between ">
                                    <h2 className="results-number" >
                                        {data.products.results.number} {`  ${data.products.results.unit}`}
                                    </h2>
                                    <div className="filters-section" >
                                        <Filter
                                            clearItem={this.handleTagClick}
                                            tagsGroup={selectedTags}
                                            clearAll={this.handleClearAll}
                                        />
                                        <div className="sort-dropdown" >
                                            <DropdownMenu
                                                selectedItem={sort}
                                                title={sort}
                                                items={data.products.sort}
                                                handleSelect={this.handleSort}
                                                right
                                            />
                                        </div>
                                    </div>
                                </div>
                                <SimpleGrid
                                    items={data.products.results.data}
                                    Component={ProductCard}
                                    colProps={{
                                        xs: 12,
                                        sm: 6,
                                        md: 6,
                                        lg: 4,
                                    }}
                                />
                            </div>
                            <div className="show-more flex-center" >
                                <button
                                    className="btn button--primary py-3 px-5 "
                                >
                                    show more
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default ProductsSearch