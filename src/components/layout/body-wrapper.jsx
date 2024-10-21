import React from 'react';
import styles from './body-wrapper.module.css'

export const BodyWrapper = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
}