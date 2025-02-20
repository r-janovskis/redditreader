// Imports to handle markdown to HTML transformation
import { markdownToHTML } from "markdown-transform-html"
import  "markdown-transform-html/lib/styles/index.css";

export interface InputData {
    // input: {
        title: string
        end_point: string
    // }
}



// Example call for Reddit API and 10 posts: https://www.reddit.com/r/nature/new.json?limit=10
// We will use format: https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}

export  const  fetchRedditPosts =  async (inputData: InputData): Promise<{ data: any }> => {
    //const response = await fetch(`https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}`)
    const { title, end_point } = inputData;
    const redditPosts: any = [];
    const redditData = await fetch(`https://www.reddit.com/${end_point}.json?raw_json=1`);

    if (!redditData.ok) {
        console.log("Damn, something went wrong with fetching data from Reddit API");
    } else {
        const json = await redditData.json();
        

        json.data.children.forEach( async (post: any) => {



            redditPosts.push({
                id: post.data.id,
                title: post.data.title,
                author: post.data.author,
                endpoint: post.data.url,
                image: post.data.thumbnail == "self" || post.data.thumbnail == "default" ? post.data.thumbnail : post.data.preview?.images[0].source.url,
                selftext: post.data.selftext
            })
        })
    } 
    return new Promise <{ data: any }>  ( resolve => resolve ({data: {title: title, end_point: end_point, posts: redditPosts}}));
}