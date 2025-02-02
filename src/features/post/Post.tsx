"use client";

import styles from "./Post.module.css";


interface PostProps {
    postNr: number;
}

export const Post = ( {postNr}: PostProps ) => {
    return (
        <article className={styles.redditPost}>
            <h2>Post Nr. {postNr}</h2>
            <p>Post content</p>
        </article>
    );
};