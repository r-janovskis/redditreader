"use client";

interface CommentProps {
    author: string
    body: string
}

export const Comment = (props: CommentProps) => {
    const {author, body} = props;
    return (
        <div>
            <p>Author: {author}</p>
            <p>{body}</p>
        </div>
    );
}