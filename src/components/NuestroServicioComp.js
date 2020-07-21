// Node Modules imports
import React, { Fragment } from 'react';
import { faShippingFast, faClipboardCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Container } from 'react-bootstrap';

// COMPONENT imports
import NuestroServicioCardComp from '../components/NuestroServicioCardComp';

const NuestroServicioComp = () => {
    return (
        <Fragment>
            <Container fluid>
                <Row className="justify-content-center">
                    <NuestroServicioCardComp 
                        title="Cumplimiento"
                        body="Personal con vasta experiencia, lo que permite que siempre lleguemos a nuestro destino."
                        icon={faClipboardCheck}
                    />
                    <NuestroServicioCardComp 
                        title="Rapidez"
                        body="Entregamos tu carga en el menor tiempo."
                        icon={faShippingFast}
                    />
                    <NuestroServicioCardComp 
                        title="Monitoreo"
                        body="Control de la carga durante todo su trayecto hasta ser entregado."
                        icon={faMapMarkerAlt}
                    />
                </Row>
            </Container>
        </Fragment>
    );
}

export default NuestroServicioComp;