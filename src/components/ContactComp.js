// Node Modules imports
import React, { Fragment, useState } from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactComp = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Fragment>
                <Container className="form_display">
                    <Form noValidate validated={validated} className="shadow p-3 mb-5 rounded" onSubmit={handleSubmit}>
                        <Form.Group controlId="">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Nombre completo" required />
                                <Form.Control.Feedback type="invalid">Debe ingresar Nombre</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Teléfono de contacto" required />
                                <Form.Control.Feedback type="invalid">Debe ingresar Teléfono</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Email" required />
                                <Form.Control.Feedback type="invalid">Debe ingresar Email</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Control as="textarea" rows="6" placeholder="Mensaje" required />
                            <Form.Control.Feedback type="invalid">Debe ingresar Mensaje</Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">Enviar mensaje</Button>   
                        </div>           
                    </Form>
                </Container>
        </Fragment>
    );
};

export default ContactComp;