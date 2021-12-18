import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Navigation from './Navigation';


function Header() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Greg Riveroll</h1>
            <Navigation />
        </div>
    )
}

export default Header;
