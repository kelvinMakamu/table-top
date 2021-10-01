import React, { Fragment } from "react";

const Chama = props => {
    return (
        <Fragment>
            <div>
                <h4>{props.name}</h4>
                <h4>{props.organization}</h4>
            </div>
        </Fragment>
    )
};

export default Chama;