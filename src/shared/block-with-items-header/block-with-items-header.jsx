import React from 'react';
import styles from './block-with-items-header.module.css';
import { useNavigate } from 'react-router-dom';

const BlockWithItemsHeader = ({ header, description, redirectLink }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.blockWithItemsHeader}>
            <span className={styles.blockWithItemsHeader__header}>{header}</span>
            <div className={styles.blockWithItemsHeader__delimiter}></div>
            <div
                onClick={() => navigate(redirectLink)}
                className={styles.blockWithItemsHeader__redirectButton}
            >
                {description}
            </div>
        </div>
    );
};

export default BlockWithItemsHeader;
