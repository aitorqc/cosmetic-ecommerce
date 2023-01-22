import React from 'react';

import css from "./Header.module.css";

import {CgShoppingCart} from "react-icons/cg";

import Logo from "../../assets/logo.png";

export default function Header() {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>amazon</span>
            </div>
            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>Eng</li>
                    </ul>
                </div>
                <input type="text" className={css.search} placeholder="Search"/>
                <CgShoppingCart className={css.cart}/>
            </div>
        </div>
    )
}
