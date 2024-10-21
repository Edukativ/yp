import React from 'react';
import styles from './counter.module.css';

const Counter = ({ value, dec, inc }) => {
    return (
        <div className={styles.counter}>
            <div onClick={dec} className={styles.counter__actionDec}>
                -
            </div>
            <span className={styles.counter__value}>{value}</span>
            <div onClick={inc} className={styles.counter__actionInc}>
                +
            </div>
        </div>
    );
};

export default Counter;
