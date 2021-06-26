import React, { useState, useEffect } from 'react';
import styles from './AppMain.module.css';
import { getCurrentTime } from '../../util/timeUtil';
const AppMain = ({ onHandlePage, btnText }) => {
  const [timeInfo, setTimeInfo] = useState(getCurrentTime());
  useEffect(() => {
    setInterval(() => setTimeInfo(getCurrentTime()), 1000);
  }, []);
  return (
    <article className={styles.timeSection}>
      <p className={styles.todayState}>{btnText}</p>
      <div className={styles.timeInfo}>
        <strong className={styles.time}>{`${timeInfo.hour}:${timeInfo.minute}`}</strong>
        <p className={styles.countryTime}>BST</p>
      </div>
      <div className={styles.buttonSection}>
        <strong className={styles.location}>IN SEOUL, KOERA</strong>
        <button type='button' onClick={onHandlePage}>{btnText}</button>
      </div>
    </article>)
}

export default AppMain