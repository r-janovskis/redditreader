"use client";


import styles from "./Post.module.css";
import { getComments, redditPostComments, postId } from "../comment/commentSlice";
import { Comment } from "../comment/Comment";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { redditEndPoint } from "../redditTopics/redditTopicsSlice";
import { useSelector } from "react-redux";




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


    const subreddit = useSelector(redditEndPoint);
    let comments = useSelector(redditPostComments);
    const post_id = useSelector(postId);
    const dispatch = useAppDispatch();



    const handleClick = async (event: any) => {

        toggleIcons();

        if (document.getElementById(`comments${event.target.id}`)?.style.display === "block") {
            document.getElementById(`comments${event.target.id}`)!.style.display = "none";
        } else {
            await dispatch(getComments({subreddit: subreddit, post_id: event.target.id}));

            Array.from(document.getElementsByClassName("postComments")).forEach( container => {
                const htmlContainer = container as HTMLElement;
                if (htmlContainer.id === `comments${event.target.id}`) {
                    htmlContainer.style.display = "block";
                } 
                else {
                    htmlContainer.style.display = "none";
                }
            });    
        }

        document.getElementById(event.target.id)?.classList.toggle('bi-chat-right-fill');
        document.getElementById(event.target.id)?.classList.toggle('bi-chat-right');  
    }

    const toggleIcons = () => {
        Array.from(document.getElementsByClassName("bi-chat-right-fill")).forEach( icon => {
            icon.classList.toggle('bi-chat-right-fill');
            icon.classList.toggle('bi-chat-right');
        });
    }

    useEffect( () => {
        toggleIcons();
    }, [subreddit])


    return (
        <div className={`card redditPost ${styles.redditPost}`} >
            {(picture != "self" && picture != "default") && <img src={picture} className={`card-img-top ${styles.postImage}`} alt={title} />}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className={styles.author}>Created by: <cite title="Author">{author}</cite></p>
          <p className="card-text" id={`postDescription${index}`}>{description}</p>
          <div className={styles.actionContainer}>         
            <a href={end_point} className="btn btn-outline-secondary" target="_blank ">View Original</a>
            <i id={id} onClick={handleClick} title="See comments" className={`btn btn-outline-secondary bi bi-chat-right ${styles.commentIcon}`}> Comments</i>
          </div>

          <section id={`comments${id}`} className={`postComments ${styles.postComments}`}>{comments.map( (comment, index) => <Comment key={index} author={comment.author} body={comment.comment} /> )}</section>
        </div>
      </div>
    );
};