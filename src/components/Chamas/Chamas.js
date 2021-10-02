import React from "react";
import Card from "../UI/Card";
import Chama from "./Chama";
import classes from './Chamas.module.css';

const Chamas = props => {

    const chamas = props.chamas.length > 0 ? props.chamas.map(chama=><Chama key={chama.id} {...chama} />)
    : <h4>No Chama Found</h4>;

    return(
        <Card>
            <h4>Available Chamas</h4>
            <hr/>
            <table className={classes.table}>
                <thead>
                    <th>Name</th>
                    <th>Organization</th>
                    <th>Branch</th>
                    <th>Location</th>
                    <th>County</th>
                    <th>Account Manager</th>
                </thead>
                <tbody>
                    {chamas}
                </tbody>
            </table>
        </Card>
    )
};

export default Chamas;