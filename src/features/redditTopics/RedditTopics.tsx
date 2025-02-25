"use client";
import { changeTopic } from "./redditTopicsSlice";
import { resetComments } from "../comment/commentSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import styles from "./RedditTopics.module.css";

export const RedditTopics = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = (event: any) => {

        const link_name: string = event.target.value.substring(2);

        dispatch(changeTopic({
            title: link_name[0].toUpperCase() + link_name.slice(1),
            end_point: event.target.value
        }
        ));

        dispatch(resetComments());
    navigate(link_name);
    
    }

    return (
        <div className={styles.redditTopics}>
            <label htmlFor = "redditTopics"> Reddit Topic: </label>
            <select id="redditTopics" onChange={handleChange} >
                <option value="r/nature">Nature</option>
                <option value="r/hiking">Hiking</option>
                <option value="r/photography">Photography</option>
                <option value="r/books">Books</option>
                <option value="r/basketball">Basketball</option>
                <option value="r/crossfit">Crossfit</option>
                <option value="r/science">Science</option>
            </select>
        </div>
    );
};