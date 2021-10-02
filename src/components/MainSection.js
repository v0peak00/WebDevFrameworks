import React from 'react'
import styles from './MainSection.module.css';

export default function MainSection(props) {
    return (
            <div>
                <div className={styles.mainBg}>
                    <div className={styles.container}>
                        <div className={styles.headLine}> Koronavirus </div> 
                        <div> <img src="./images/koronaKuva.png" alt=""/> </div> 
                        <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    </div>
                </div>
            </div>

    )
}
