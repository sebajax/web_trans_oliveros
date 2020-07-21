import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderComp = () => {

    return (
        <Fragment>
            <Navbar collapseOnSelect style={{ "backgroundColor": "#406885"}} expand="lg">
                <Navbar.Brand className="text-white" href="/">
                    <FontAwesomeIcon icon={faSuitcaseRolling} size="2x" className="mr-3" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Item className="desktop_services">
                            <AnchorLink href="#nuestro_servicio"> Nuestro servicio </AnchorLink>
                        </Nav.Item>
                        <Nav.Item className="desktop_services">
                            <AnchorLink href="#quienes_somos"> Quienes somos </AnchorLink>
                        </Nav.Item>
                        <Nav.Item className="desktop_services">
                            <AnchorLink href="#mision"> Mision </AnchorLink>
                        </Nav.Item>
                        <Nav.Item className="desktop_services">
                            <AnchorLink href="#nuestros_clientes"> Nuestros clientes </AnchorLink>
                        </Nav.Item>
                        <Nav.Item>
                            <AnchorLink href="#contactenos"> Contactenos </AnchorLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default HeaderComp;