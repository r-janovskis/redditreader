"use client";

import style from "./Logo.module.css";

export const Logo = () => {
    return (
        <img
            className={style.logo}
            src='./../../logo.png'
            alt="Reddit Reader Logo"
        />
    );
}