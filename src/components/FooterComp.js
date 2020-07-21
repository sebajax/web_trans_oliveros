// Node Modules imports
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faArrowCircleUp, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FooterComp = () => {
    return (
        <Fragment>
            <footer className="footer">
                <Container className="py-5 w-100">
                    <Row className="align-items-center justify-content-center">
                        <Col sm={1}>
                            <div className="cellphone">
                                <FontAwesomeIcon icon={faInfoCircle} size="3x" className="mr-3" /> 
                            </div>
                        </Col>
                        <Col sm={10}>
                            <Row>
                                <Col className="pb-2">
                                    <h5> Contacto </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" className="mr-3" />
                                    contacto@transportesoliveros.cl
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pt-2">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="1x" className="mr-3" />
                                    (+569) 9829 5322 
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pt-2">
                                <FontAwesomeIcon icon={faLinkedin} size="1x" className="mr-3" />
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/transportes-oliveros/"> 
                                        <span className="linkedin" style={{ "color": "#fafafa" }}> LinkedIn - Transportes Oliveros </span> 
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div className="cellphone">
                                <AnchorLink href="#top"> 
                                    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" className="mr-3" />
                                </AnchorLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ "backgroundColor": "#2d5470" }} className="text-center py-3">
                    <span style={{ "color": "#adadad" }}> © 2020 Copyright: </span> 
                    <span> Transportes Oliveros </span> 
                </div>
            </footer>
        </Fragment>
    );
}

export default FooterComp;