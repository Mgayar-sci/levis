import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BasicCarousel from '../basicCarousel/BasicCarousel';


import './links-carousel.scss';


const LinksCarousel = ({ items }) => {
    return (
        <div className="carousel-links" >
            <Container>
                <BasicCarousel
                    items={items}
                    component={({ item: { header, route, label } }) => {
                        return (
                            <div className="carousel-element">
                                {/*<p className="title" >
                                    {header}
                        </p>*/}
                                <NavLink className="link" to={route} >
                                    {label}
                                </NavLink>
                            </div>
                        )
                    }}
                />
            </Container>
        </div>
    )
}

export default LinksCarousel