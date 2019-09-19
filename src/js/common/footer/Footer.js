import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../../data';
import LinksCol from '../linksCol/LinksCol';
import './footer.scss'
import SocialIcon from '../socialIcon/SocialIcon';
import Subscripe from '../subscripe/Subscripe';


const Footer = (props) => {
    return (
        <div className="footer" >
            <Container fluid >
                <Row>
                    <Col md={8}>
                        <div className="links" >
                            <div className="nav-links" >
                                {
                                    data.footer.navLinks.map(({ header, links }) => <LinksCol header={header} links={links} />)
                                }
                            </div>
                            <div className="social" >
                                {
                                    data.footer.socialLinks.map(({ type, link }) => <SocialIcon type={type} link={link} />)
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Subscripe title={data.footer.subscripe.header} body={data.footer.subscripe.body} />
                        <div className="logo">
                            <img src={data.footer.logos.company} alt="logo" className="site-logo" />
                            <div className="nasnav" >
                                <span className="powered-by" >
                                    powered by
                                </span>
                                <img src={data.footer.logos.nasnav} alt="nasnav" className="nasnav" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer