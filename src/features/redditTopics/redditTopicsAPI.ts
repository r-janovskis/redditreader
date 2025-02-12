
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


export const fetchRedditPosts =  (inputData: InputData): Promise<{ data: any }> => {
    //const response = await fetch(`https://www.reddit.com/${end_point}.json?limit=${numberOfPosts}`)
    const { title, numberOfPosts, end_point } = inputData;

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