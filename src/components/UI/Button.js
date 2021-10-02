import React from "react";
import classes from './Button.module.css';

const Button = props => {
    const _className = `${classes.button} ${classes[props.variant]}`;
    const _disabled  = props.disabled? props.disabled : false;
    return (
        <button onClick={props.onClick} className={_className} disabled={_disabled}>
            {props.label}
        </button>
    );
}

export default Button;