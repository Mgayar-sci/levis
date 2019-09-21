import React from 'react';
import data from '../../../data';
import NavButton from '../navButton/NavButton';
import { Container, Row, Col } from 'react-bootstrap';
import './final-touch.scss';

const FinalTouch = (props) => {
    const style = {
        backgroundImage: `url(${data.home.final.background})`,
        backgroundColor: "#ffffff94",
        backgroundBlendMode: "overlay"
    };

    return (
        <div style={style} className="final-touch" >
            <Container>
                <Row>
                    <Col sm={12} md={6} >
                        <div className="title-container" >
                            <p className="title">
                                {data.home.final.title}
                            </p>
                        </div>
                        <p className="sub">
                            {data.home.final.sub}
                        </p>
                        <div>
                            {
                                data.home.final.links.map((link, i) => (
                                    <div key={i}>
                                        <NavButton
                                            className="link"
                                            variant="primary"
                                            outlined
                                            route={link.route}
                                        >
                                            {link.label}
                                        </NavButton>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>
                    <Col sm={12} md={6} >
                        <div className="img-container" >
                            <img src={data.home.final.img} alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FinalTouch