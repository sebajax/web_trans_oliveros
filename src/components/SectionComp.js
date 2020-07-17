// Node Modules imports
import React, { Fragment } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

const SectionComp = props => {
    return (
        <Fragment>
            <Jumbotron>
                <Container className="w-75">
                    <Row className="justify-content-md-center align-items-center">
                        <Col sm>
                            <img className="align-self-center rounded w-100" src={props.img} alt={props.title} />
                        </Col>
                        <Col sm className="mt-2">
                            {props.body}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>  
        </Fragment>      
    );
};

export default SectionComp;