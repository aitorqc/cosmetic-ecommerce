import React from 'react';

import css from "./Hero.module.css";

import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRightSquare } from "react-icons/bs";

import HeroImg from "../../assets/hero.png";

export default function Hero() {
    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nunc a mauris auctor tincidunt.</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="Young face" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRightSquare />
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy CUstomers</span>
                </div>
            </div>
        </div>
    )
}
