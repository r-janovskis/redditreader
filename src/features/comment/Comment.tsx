"use client";

import styles from "./Comment.module.css";

interface CommentProps {
    author: string
    body: string
}

export const Comment = (props: CommentProps) => {
    const {author, body} = props;
    return (
        <div className={`card card-body ${styles.commentContainer}`}>
            <p className={styles.commentAuthor}>Created by: <cite>{author}</cite></p>
            <p className={styles.commentText}>{body}</p>
        </div>
    );
}