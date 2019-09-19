import React from 'react';
import data from '../../../data';
import NavButton from '../../common/navButton/NavButton';
import { Container, Row, Col } from 'react-bootstrap';
import './final-touch.scss';

const FinalTouch = (props) => {
    const style = {
        backgroundImage: `url(${data.final.background})`,
    };

    return (
        <div style={style} className="final-touch" >
            <Container>
                <Row>
                    <Col sm={12} md={6} >
                        <div className="title-container" >
                            <p className="title">
                                {data.final.title}
                            </p>
                        </div>
                        <p className="sub">
                            {data.final.sub}
                        </p>
                        <div>
                            {
                                data.final.links.map((link, i) => (
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
                            <img src={data.final.img} alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FinalTouch