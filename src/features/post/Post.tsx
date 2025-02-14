"use client";


import styles from "./Post.module.css";
import { useEffect } from "react";


interface PostProps {
    title: string;
    end_point: string;
    picture: string;
    description: string;
    index: number;
}

export const Post = ( {title, end_point, picture, description, index}: PostProps ) => {

useEffect( () => {
    document.getElementById(`postDescription${index}`)!.innerHTML = description;
}, [description, index])
    return (
        <article className={styles.redditPost}>
            <h2>{title}</h2>
            <img src={picture} alt={title} />
            <section id={`postDescription${index}`}>{description}</section>
            <p>Link to source: <a href={end_point} target="_blank">{end_point}</a></p>
        </article>
    );
};