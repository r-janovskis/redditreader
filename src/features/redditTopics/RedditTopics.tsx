"use client";

import styles from "./RedditTopics.module.css";

export const RedditTopics = () => {
    return (
        <div className={styles.redditTopics}>
            <label htmlFor = "redditTopics"> Reddit Topic: </label>
            <select id="redditTopics" >
                <option value="r/nature">Nature</option>
                <option value="r/hiking">Hiking</option>
                <option value="r/photography">Photography</option>
                <option value="r/books">Books</option>
                <option value="r/basketball">basketball</option>
                <option value="r/crossfit">Crossfit</option>
            </select>
        </div>
    );
};