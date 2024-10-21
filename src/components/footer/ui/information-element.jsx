import React from 'react';
import styles from './information-element.module.css';

const InformationElement = ({ header, body }) => {
    return (
        <div className={styles.informationElement}>
            <span className={styles.informationElement__header}>{header}</span>
            <span className={styles.informationElement__body}>{body}</span>
        </div>
    );
};

export default InformationElement;
