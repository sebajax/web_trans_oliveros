import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NuestroServicioComp = props => {
    return (
        <Fragment>
            <div className="service">
                <FontAwesomeIcon icon={props.icon} size="2x" />
                <span className="service_title ml-3"> {props.title} </span>
            </div>
            <hr />
            <p className="mt-2">
                {props.body}
            </p>   
        </Fragment>
    );
}

export default NuestroServicioComp;