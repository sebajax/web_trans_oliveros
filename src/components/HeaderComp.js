import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderComp = () => {

    return (
        <Fragment>
            <Navbar collapseOnSelect style={{ "background-color": "#406885"}} expand="lg">
                <Navbar.Brand className="text-white" href="/">
                    <FontAwesomeIcon icon={faSuitcaseRolling} size="2x" className="mr-3" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link>
                            <AnchorLink href="#nuestro_servicio"> Nuestro servicio </AnchorLink>
                        </Nav.Link>
                        <Nav.Link>
                            <AnchorLink href="#quienes_somos"> Quienes somos </AnchorLink>
                        </Nav.Link>
                        <Nav.Link>
                            <AnchorLink href="#mision"> Mision </AnchorLink>
                        </Nav.Link>
                        <Nav.Link>
                            <AnchorLink href="#nuestros_clientes"> Nuestros clientes </AnchorLink>
                        </Nav.Link>
                        <Nav.Link>
                            <AnchorLink href="#contactenos"> Contactenos </AnchorLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default HeaderComp;