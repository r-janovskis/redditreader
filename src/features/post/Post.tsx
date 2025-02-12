"use client";

import { redditTitle } from "./../redditTopics/redditTopicsSlice";
import { useSelector } from "react-redux";
import styles from "./Post.module.css";


interface PostProps {
    title: string;
    end_point: string;
}

export const Post = ( {title, end_point, }: PostProps ) => {

    const receivedTitle = useSelector(redditTitle);
    return (
        <article className={styles.redditPost}>
            <h2>{title}</h2>
            <p>For this post we will querry the API: {end_point}</p>
        </article>
    );
};