import React from 'react';
import { Carousel } from 'react-bootstrap';
import './basic-carousel.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import { ic_chevron_left } from 'react-icons-kit/md/ic_chevron_left';

const NextIcon = ({ color }) => <BaseIcon icon={ic_chevron_right} size="lg" color={color||"primary"} />
const PrevIcon = ({ color }) => <BaseIcon icon={ic_chevron_left} size="lg" color={color||"primary"} />

const BasicCarousel = ({ items, carouselProps, component, iconsColor }) => {
    const Component = component;
    return (
        <div className="carousel-container" >
            <Carousel
                nextIcon={<NextIcon color={iconsColor} />}
                prevIcon={<PrevIcon color={iconsColor} />}
                interval={30000}
                pauseOnHover
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