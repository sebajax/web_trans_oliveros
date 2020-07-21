// Node Modules imports
import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';

// COMPONENT imports
import ServicioComp from '../components/ServicioComp';

const NuestroServicioCardComp = props => {
    return (
        <Fragment>
            <Col sm={8} md={8} lg={6} xl={3} className="desktop_services">
                <div className="shadow p-3 mb-5 rounded service_card">
                    <ServicioComp
                        title={props.title}
                        body={props.body}
                        icon={props.icon}
                    />
                </div>
            </Col>
        </Fragment>
    )
}

export default NuestroServicioCardComp;