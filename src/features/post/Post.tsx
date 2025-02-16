"use client";


import styles from "./Post.module.css";
import { useEffect } from "react";


interface PostProps {

        id: string;
        title: string;
        author: string;
        end_point: string;
        picture: string;
        description: string;
        index: number;

}

export const Post = ( post: PostProps ) => {
    const {title, end_point, picture, description, index, id, author} = post;

useEffect( () => {
    document.getElementById(`postDescription${index}`)!.innerHTML = description;
}, [description, index])

    return (
        <article className={styles.redditPost}>
            <h2>{title}</h2>
            <img src={picture} alt={title} />
            <section id={`postDescription${index}`}>{description}</section>
            <p>Author: {author}</p>
            <p>Link to source: <a href={end_point} target="_blank">{end_point}</a></p>
            <p>Item for comments: {id}</p>
        </article>
    );
};