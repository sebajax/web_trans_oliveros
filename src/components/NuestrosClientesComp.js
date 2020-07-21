// Node Modules imports
import React, { Fragment } from 'react';

// COMPONENT imports
import { Container, Col, Row } from 'react-bootstrap';

// Images imports
import AirFrance from '../resources/images/air_france.png';
import United from '../resources/images/united.png';
import AlItalia from '../resources/images/alitalia.png';
import Klm from '../resources/images/klm.png';

const NuestrosClientesComp = () => {

    return (
        <Fragment>
            <Container className="w-75">
                <Row className="justify-content-center">
                    <Col xs={8} sm={5} md={4} lg={3} xl={3}>
                        <img src={United} alt="United" className="w-100" />
                        <img src={AirFrance} alt="Air France" className="w-100" />
                        <img src={AlItalia} alt="Al Italia" className="w-100" />
                        <img src={Klm} alt="Klm" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

}

export default NuestrosClientesComp;