import React, { useState, useEffect } from 'react';
import { getTextInfo } from '../../util/famousSayingData';
import styles from './AppTop.module.css';

const AppTop = React.memo(function AppTop() {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(0);
    function changeText() {
        const { text, author, nextId } = getTextInfo(id);
        setText(text);
        setAuthor(author);
        setId(nextId);
    }
    useEffect(() => {
        changeText();
    }, []);
    return (
        <article className={styles.famousSaying}>
            <p>{text}</p>
            <p>{author}</p>
            <button tyoe="button" onClick={changeText}>refresh</button>
        </article >
    )
})
export default AppTop;