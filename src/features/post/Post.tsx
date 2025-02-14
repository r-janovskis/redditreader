"use client";

import { redditTitle } from "./../redditTopics/redditTopicsSlice";
import { useSelector } from "react-redux";
import styles from "./Post.module.css";


interface PostProps {
    title: string;
    end_point: string;
    picture: string;
}

export const Post = ( {title, end_point, picture}: PostProps ) => {

    const receivedTitle = useSelector(redditTitle);
    return (
        <article className={styles.redditPost}>
            <h2>{title}</h2>
            <img src={picture} alt={title} />
            <p>For this post we will querry the API: {end_point}</p>
        </article>
    );
};