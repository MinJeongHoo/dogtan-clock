import React, { useState, useEffect } from 'react';
import { getTextInfo } from '../../util/famousSayingData';
import styles from './AppTop.module.css';

function AppTop({ btnState }) {

    let className = '';
    btnState ? className = `${styles.famousSaying} ${styles.off}`
        : className = `${styles.famousSaying}`
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
        <article className={className}>
            <p>{text}</p>
            <p>{author}</p>
        </article >
    )
}
export default AppTop;