"use client";

import styles from "./Post.module.css";


interface PostProps {
    title: string;
    end_point: string;
}

export const Post = ( {title, end_point, }: PostProps ) => {
    return (
        <article className={styles.redditPost}>
            <h2>{title}</h2>
            <p>For this post we will querry the API: {end_point}</p>
        </article>
    );
};