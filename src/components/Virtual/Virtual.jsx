import React from 'react';
import ReactCompareImage from 'react-compare-image';

import css from "./Virtual.module.css";

import Shade from "../../assets/shade.png";
import After from "../../assets/after.png";
import Before from "../../assets/before.png";

export default function Virtual() {
    return (
        <div className={css.Virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong shade Again</span>
                <span>Try Now!</span>
                <img src={Shade} alt="Shade Face variation" />
            </div>

            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    )
}
