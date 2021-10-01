import React, {Fragment } from "react";
import Chama from "./Chama";

const Chamas = props => {
    const chamas = props.chamas.length > 0 ? props.chamas.map(chama=><Chama key={chama.id} name={chama.name} organization={chama.organization}/>)
    : <h4>No Chama Found</h4>;

    return(
        <Fragment>
            <div>
                <h4>Avaiable Chamas</h4>
                {chamas}
            </div>
        </Fragment>
    )
};

export default Chamas;