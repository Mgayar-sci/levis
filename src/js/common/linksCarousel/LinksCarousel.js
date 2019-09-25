import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BasicCarousel from '../basicCarousel/BasicCarousel';


import './links-carousel.scss';


const LinksCarousel = ({ items }) => {
    return (
        <article className="carousel-links" >
            <Container>
                <BasicCarousel
                    items={items}
                    component={({ item: { route, label } }) => {
                        return (
                            <section className="carousel-element">
                                <NavLink className="link" to={route} >
                                    {label}
                                </NavLink>
                            </section>
                        )
                    }}
                />
            </Container>
        </article>
    )
}

export default LinksCarousel