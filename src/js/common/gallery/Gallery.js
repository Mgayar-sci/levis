import React, { Component } from 'react';

import './gallery.scss';
import data from '../../../data';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImage: data.product.gallery.images[0]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(src) {
        this.setState({ activeImage: src })
    }

    render() {
        const { activeImage } = this.state;
        return (
            <div className="gallery" >
                <div className="imgs" >
                    {
                        data.product.gallery.images.map((img, i) => (
                            <div
                                className={`img-container ${activeImage === img ? "active" : ""}`}
                                onClick={() => this.handleClick(img)}
                            >
                                <img src={img} key={i} />
                            </div>
                        ))
                    }
                </div>
                <div className="showcase" >
                    <img
                        src={activeImage}
                        alt="product image"
                    />
                </div>
            </div>
        )
    }
}
