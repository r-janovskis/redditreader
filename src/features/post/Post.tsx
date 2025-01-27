"use client";

import styles from "./Post.module.css";

export const Post = () => {
    return (
        <article className={styles.redditPost}>
            <h2>Post title</h2>
            <p>Post content</p>
        </article>
    );
};