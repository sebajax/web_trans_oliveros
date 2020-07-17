// Node Modules imports
import React, { Fragment } from 'react';
import { faShippingFast, faClipboardCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

// COMPONENT imports
import ServicioComp from '../components/ServicioComp';

const NuestroServicioComp = () => {
    return (
        <Fragment>
            <Jumbotron>
                <Container className="w-100">
                    <Row className="justify-content-center align-items-start">
                        <Col sm={4} lg={3} md={4} className="mr-5">
                            <Row >
                                <div style={{"height": "240px"}} className="shadow p-3 mb-5 rounded">
                                    <ServicioComp 
                                        title="Cumplimiento"
                                        body="Personal con vasta experiencia, lo que permite que siempre lleguemos a nuestro destino."
                                        icon={faClipboardCheck}
                                    />
                                </div>
                            </Row>
                        </Col>
                        <Col sm={4} lg={3} md={4} className="mr-5">
                            <Row>
                                <div style={{"height": "240px"}} className="shadow p-3 mb-5 rounded">
                                    <ServicioComp 
                                        title="Rapidez"
                                        body="Entregamos tu carga en el menor tiempo."
                                        icon={faShippingFast}
                                    />
                                </div>
                            </Row>
                        </Col>
                        <Col sm={4} lg={3} md={4} className="mr-5">
                            <Row>
                                <div style={{"height": "240px"}} className="shadow p-3 mb-5 rounded">
                                    <ServicioComp 
                                        title="Monitoreo"
                                        body="Control de la carga durante todo su trayecto hasta ser entregado."
                                        icon={faMapMarkerAlt}
                                    />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Fragment>
    );
}

export default NuestroServicioComp;