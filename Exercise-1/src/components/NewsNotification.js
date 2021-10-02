import React from 'react'
import styles from './NewsNotification.module.css'

export default function NewsNotification(props) {
    return (
        <div className={styles.mainBg}>
            <div className={styles.notificationBackground}>
                <div className={styles.container}>
                    <div><span className={styles.headlineSpan}>{props.topic}:</span>{props.body} </div>
                </div>
            </div>
        </div>
    )
}
