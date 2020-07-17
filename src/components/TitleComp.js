import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

const HeaderComp = props => {
    return (
        <Fragment>
            <Container className="py-5">
                <div className="text-center pb-3">
                    <h2> {props.title} </h2>
                    <hr />
                </div>
            </Container>
        </Fragment>
    );
}

export default HeaderComp;