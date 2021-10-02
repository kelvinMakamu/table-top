import React from "react";

const Chama = props => {
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td>{props.organization}</td>
            <td>{props.branch}</td>
            <td>{props.location}</td>
            <td>{props.county}</td>
            <td>{props.accountManager}</td>
        </tr>
    )
};

export default Chama;