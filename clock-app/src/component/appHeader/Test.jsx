import React from 'react';
import styles from './AppTop.module.css';

const Test = ({ data, btnState, changeContent }) => {
    let className = '';
    btnState ? className = `${styles.famousSaying} ${styles.off}`
        : className = `${styles.famousSaying}`
    if (data) {
        return (
            <article className={className}>
                <p>{data.content}</p>
                <p>{data.author}</p>
                <button onClick={changeContent}>refresh</button>
            </article >
        )
    }
    return <article className={className}></article>;

}


export default Test;