"use client";

import styles from "./Logo.module.css";

export const Logo = () => {
    return (
        <img
            className={styles.logo}
            src='./../logo.png'
            alt="Reddit Reader Logo"
        />
    );
}