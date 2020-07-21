// Node Modules imports
import React, { Fragment } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

const SectionComp = props => {
    return (
        <Fragment>
            <Jumbotron>
                <Container className="w-100">
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} sm={12} md={10} lg={8} xl={6}>
                            <img className="align-self-center rounded w-100" src={props.img} alt={props.title} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={10} xl={8}  className="mt-5">
                            {props.body}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>  
        </Fragment>      
    );
};

export default SectionComp;