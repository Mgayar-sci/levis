import React from 'react';
import { Carousel } from 'react-bootstrap';
import './basic-carousel.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import { ic_chevron_left } from 'react-icons-kit/md/ic_chevron_left';

const NextIcon = <BaseIcon icon={ic_chevron_right} size="lg" color="primary" />
const PrevIcon = <BaseIcon icon={ic_chevron_left} size="lg" color="primary" />

const BasicCarousel = ({ items, carouselProps, component }) => {
    const Component = component;
    return (
        <div className="carousel-container" >
            <Carousel
                nextIcon={NextIcon}
                prevIcon={PrevIcon}
                interval={3000}
                {...carouselProps}
            >{
                    items.map((item, i) => {
                        return (
                            <Carousel.Item key={i} >
                                <Component item={item} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default BasicCarousel