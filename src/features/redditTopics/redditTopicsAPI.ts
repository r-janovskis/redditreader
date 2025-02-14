
export interface InputData {
    // input: {
        title: string
        numberOfPosts: number
        end_point: string
    // }
}

export interface FetchedElement {
    title: string
    endpoint: string
}

// Example call for Reddit API and 10 posts: https://www.reddit.com/r/nature/new.json?count=10
// We will use format: https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}

export  const  fetchRedditPosts =  async (inputData: InputData): Promise<{ data: any }> => {
    //const response = await fetch(`https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}`)
    const { title, numberOfPosts, end_point } = inputData;

    const redditData = await fetch(`https://www.reddit.com/${end_point}.json?count=${numberOfPosts}`)

    if (!redditData.ok) {
        console.log("Damn, something went wrong with fetching data from Reddit API");
    } else {
        const json = await redditData.json();
        const redditPosts: any = [];

        json.data.children.forEach((post: any) => {
            redditPosts.push({
                title: post.data.title,
                endpoint: post.data.url,
                image: post.data.thumbnail
            })
        })
        console.log(redditPosts);
    }

    const fetchedData: FetchedElement[] = [];
    for (let i = 0; i < numberOfPosts; i++) {
        fetchedData.push({
            title: `${title} Post Nr. ${i + 1}`,
            endpoint: `End-point to fetch data from Reddit API: ${end_point}`
        })
    }
    return new Promise<{ data: any }>(resolve =>
        setTimeout(() => resolve({ data: {title: title, end_point: end_point, posts: fetchedData} }), 500),
    )    
}