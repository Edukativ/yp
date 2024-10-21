import React from 'react';

import styles from './page-header.module.css'

const PageHeader = ({header}) => {
    return (
        <span className={styles.header}>
            {header}
        </span>
    );
};

export default PageHeader;