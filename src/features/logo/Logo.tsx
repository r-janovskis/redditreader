"use client";

import style from "./Logo.module.css";
import logoImage  from "./../../logo.png"

export const Logo = () => {
    return (
        <img
            className={style.logo}
            src={logoImage}
            alt="Reddit Reader Logo"
        />
    );
}