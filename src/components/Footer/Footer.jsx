import React from 'react'

import css from "./Footer.module.css";

import { LocationMarkerIcon, PhoneIcon, InboxIcon } from "@heroicons/react/outline"

import Logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <div className={css.cFooterWrapper}>
            <hr />

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north avenue Orlando, Fl 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href="tel:352-306-444x">552-306-444x</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="mailto:support@amazon.com">support@amazon.com</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
