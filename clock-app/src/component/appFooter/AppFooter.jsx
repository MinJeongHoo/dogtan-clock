import React from 'react';
import styles from './AppFooter.module.css';

const AppFooter = ({ btnState }) => {
    let className = '';
    if (!btnState) {
        className = `${styles.footer} ${styles.off}`;
    }
    else {
        className = `${styles.footer} ${styles.on}`;
    }
    return (
        <div className={className}>
            <section className={styles.partArea}>
                <div className={styles.info}>
                    <h3 className={styles.topText}>CURRENT TIMEZONE</h3>
                    <h1 className={styles.bottomText}>Europe/London</h1>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.topText}>DAY OF THE WEEK</h3>
                    <h1 className={styles.bottomText}>5</h1>
                </div>
            </section>
            <section className={styles.partArea}>
                <div className={styles.info}>
                    <h3 className={styles.topText}>DAY OF THE YEAR</h3>
                    <h1 className={styles.bottomText}>295</h1>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.topText}>WEEK NUMBER</h3>
                    <h1 className={styles.bottomText}>42</h1>
                </div>
            </section>
        </div>
    )
}
export default AppFooter;