import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h4>Table Top</h4>
            </header>
        </>
    );
}

export default Header;