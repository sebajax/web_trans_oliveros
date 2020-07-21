// Node Modules imports
import React, { Fragment } from 'react';

// COMPONENT imports
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

// Images imports
import AirFrance from '../resources/images/air_france.png';
import United from '../resources/images/united.png';
import AlItalia from '../resources/images/alitalia.png';
import Klm from '../resources/images/klm.png';

const NuestrosClientesComp = () => {

    return (
        <Fragment>
            <Jumbotron>
                <Container className="w-75">
                    <Row className="justify-content-center">
                        <Col xs={8} sm={6} md={4} lg={4} xl={4}>
                            <img src={United} alt="United" className="w-100" />
                            <img src={AirFrance} alt="Air France" className="w-100" />
                            <img src={AlItalia} alt="Al Italia" className="w-100" />
                            <img src={Klm} alt="Klm" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>            
        </Fragment>
    );

}

export default NuestrosClientesComp;