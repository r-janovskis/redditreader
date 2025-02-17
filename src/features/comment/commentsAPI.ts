// Imports to handle markdown to HTML transformation
import { markdownToHTML } from "markdown-transform-html"
import  "markdown-transform-html/lib/styles/index.css";





// We will call comments based on the post id in form: https://www.reddit.com/${end_point}/comments/${post_id}.json
// Example call: https://www.reddit.com/r/nature/comments/1iqbf83.json

export  const  fetchComments =  async (id: string, end_point: string): Promise<{ data: any }> => {

    const postComments: any = [];
    const commentsData = await fetch(`https://www.reddit.com/${end_point}/comments/${id}.json`);

    if (!commentsData.ok) {
        console.log("Damn, something went wrong with fetching data from Reddit API, while retrieving comments");
    } else {
        const json = await commentsData.json();

        json[1].data.children.forEach((post: any) => {
            postComments.push({
                author: post.data.author,
                comment: post.data.body,
            })
        })
    }

    return new Promise <{ data: any }>  ( resolve => resolve ({data: {id: id, comments: postComments}}));
}