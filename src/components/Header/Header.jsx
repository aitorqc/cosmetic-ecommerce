import React, { useState } from 'react';

import css from "./Header.module.css";

import { CgShoppingCart } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

import Logo from "../../assets/logo.png";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>amazon</span>
            </div>

            <div className={css.right}>

                <div className={css.bars} onClick={() => setShowMenu(prevState => !prevState)}>
                    <GoThreeBars />
                </div>

                <ul className={css.menu} style={{ display: showMenu ? "inherit" : 'none' }}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>Eng</li>
                </ul>

                <input type="text" className={css.search} placeholder="Search" />
                <CgShoppingCart className={css.cart} />
            </div>
        </div>
    )
}
