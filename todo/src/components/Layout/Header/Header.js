import React from 'react';

import styles from './Header.module.css';

const header = () => {
    return (
        <header className={styles.header}>
            <h1>TodoList</h1>
        </header>

    );
}

export default header;