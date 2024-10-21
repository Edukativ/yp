import React from 'react';
import Basket from './ui/basket/basket';
import NavBarButton from './ui/button/nav-bar-button';
import styles from './nav-bar.module.css'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const count = useSelector((state) => state.cart.totalItemsCount);

    return (
        <div className={styles.navbar}>
            <img src="/public/logo.png" alt="logo" />
            <div className={styles.navbar__buttonsWrapper}>
                <NavBarButton text={'Main Page'} href={'/'} />
                <NavBarButton text={'Categories'} href={'/categories-page'} />
                <NavBarButton text={'All products'} href={'/products-page'} />
                <NavBarButton text={'All sales'} href={'/sales-page'} />
            </div>
            <Basket count={count}></Basket>
        </div>
    );
};

export default NavBar;