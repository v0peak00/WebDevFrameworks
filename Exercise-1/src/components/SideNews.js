import React from 'react'
import styles from './SideNews.module.css';

export default function SideNews(props) {
    return (
        <div>
                <div className={styles.container}>
                    <div className={styles.headLine}> Luetuimmat</div>
                    <div className={styles.listItems}> 
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div>
                    <div className={styles.bodySpan}><span className={styles.topicSpan}>{props.topic} | </span>{props.body}</div></div>
                </div>
        </div>
    )
}
