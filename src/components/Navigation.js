import React, { useState } from 'react';
import styles from '../styles/Navigation.module.css';

function Navigation(){

    const [navbar, useNavbar] = useState('about');

    function changePage(page) {
        
        console.log(navbar)
    }

    return (
        <div className={styles.container}>
            <ul className={styles.navBar}>
                <div className={styles.navLink} onClick={changePage}>About</div>
                <div className={styles.navLink} onClick={changePage}>Portfolio</div>
                <div className={styles.navLink} onClick={changePage}>Contact</div>
                <div className={styles.navLink} onClick={changePage}>Resume</div>
            </ul>
        </div>
    )
}

export default Navigation;
