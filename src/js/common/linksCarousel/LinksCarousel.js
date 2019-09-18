import React from 'react';
import { Carousel } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import { ic_chevron_left } from 'react-icons-kit/md/ic_chevron_left';
import { NavLink } from 'react-router-dom';

import './links-carousel.scss';

const NextIcon = <Icon icon={ic_chevron_right} size={50} style={{ color: 'black' }} />
const PrevIcon = <Icon icon={ic_chevron_left} size={50} style={{ color: 'black' }} />
const LinksCarousel = ({ items }) => {
    return (
        <div className="carousel-container" >
            <Carousel
                nextIcon={NextIcon}
                prevIcon={PrevIcon}
                interval={3000}
            >{
                    items.map(({ header, label, route }) => {
                        return (
                            <Carousel.Item>
                                <div className="carousel-element">
                                    <p className="title" >
                                        {header}
                                    </p>
                                    <NavLink className="link" to={route} >
                                        {label}
                                    </NavLink>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </div>

    )
}

export default LinksCarousel