import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    
    
    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.leftFlexbox}>
                    <div className={styles.brand}>HELSINGIN SANOMAT</div>
                    <div className={styles.optionsFlexbox}>Uutiset</div> 
                    <div>Lehdet</div> 
                </div>
                <div className={styles.rightFlexbox}>
                    <div className={styles.tilaaButton}>Tilaa</div>
                    <div className={styles.basicFlexboxRight}>Kirjaudu</div> 
                    <div className={styles.basicFlexboxRight}>Hae</div>
                    <div className={styles.basicFlexboxRight}>Valikko</div>
                </div>  
            </div> 
        </div> 

    )   
}
