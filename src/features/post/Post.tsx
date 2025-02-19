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
        //comments: any[];

}

export const Post = ( post: PostProps ) => {
    const {title, end_point, picture, description, index, id, author} = post;


    const subreddit = useSelector(redditEndPoint);
    let comments = useSelector(redditPostComments);
    //const post_id = useSelector(postId);
    const dispatch = useAppDispatch();

    const handleClick = async (event: any) => {

        if (document.getElementById(`comments${event.target.id}`)?.style.display === "block") {
            document.getElementById(`comments${event.target.id}`)!.style.display = "none";
        } else {
            await dispatch(getComments({subreddit: subreddit, post_id: event.target.id}));
            // console.log(subreddit);
            // console.log(event.target.id);

            Array.from(document.getElementsByClassName("postComments")).forEach( container => {
                const htmlContainer = container as HTMLElement;
                if (htmlContainer.id === `comments${id}`) {
                    htmlContainer.style.display = "block";
                } else {
                    htmlContainer.style.display = "none";
                }
            });
        }
        
    }

    // useEffect( () => {
    //     //console.log(comments);
    //     //const commentsContainer = document.getElementById(`comments${id}`);
    // }, [comments])
    

    // useEffect( () => {
    //     document.getElementById(`postDescription${index}`)!.innerHTML = description;

    //     // const comments_section = comments.map( (comment) => <Comment />);
    //     // document.getElementById(`comments${id}`)!.innerHTML = comments_section
    // }, [description, index]);

    return (
        // <article className={styles.redditPost}>
        //     <h2>{title}</h2>

        //     <img src={picture} alt={title} />
        //     <section id={`postDescription${index}`}>{description}</section>
        //     <p>Author: {author}</p>
        //     <p>Link to source: <a href={end_point} target="_blank">{end_point}</a></p>
        //     <button id={id} onClick={handleClick}>Show comments</button>
        //     <section id={`comments${id}`} className="postComments">{comments.map( (comment, index) => <Comment key={index} author={comment.author} body={comment.comment} /> )}</section>
        // </article>
        <div className={`card ${styles.redditPost}`} >
            {(picture != "self" && picture != "default") && <img src={picture} className={`card-img-top`} alt={title} />}
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className={`blockquote-footer`}>Created by: <cite title="Author">{author}</cite></p>
          <p className="card-text" id={`postDescription${index}`}>{description}</p>
          <a href="#" className="btn btn-primary" target="_blank ">View Original</a>
          <button id={id} className={`btn btn-primary`} onClick={handleClick}>Show comments</button>
          <section id={`comments${id}`} className="postComments">{comments.map( (comment, index) => <Comment key={index} author={comment.author} body={comment.comment} /> )}</section>
        </div>
      </div>
    );
};