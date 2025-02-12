//import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"
import { fetchRedditPosts, InputData } from "./redditTopicsAPI"


export interface RedditTopicsState {
    title: string
    link_name: string
    end_point: string
    numberOfPosts: number
    step: number
    posts: any[]
    status: "idle" | "loading" | "failed"
  }

  interface RedditTopicsReducer {
    payload: {
        title: string
        link_name: string
        end_point: string
    }
  }

  const initialPosts = await fetchRedditPosts({end_point: "r/nature", title: "Nature", numberOfPosts: 10})
  
  const initialState: RedditTopicsState = {
    title: "Nature",
    link_name: "nature",
    end_point: "r/nature",
    numberOfPosts: 10,
    step: 10,
    posts: initialPosts.data.posts,
    status: "idle"
  };

const redditTopicsReducer = {
    // changeTopic: (state: RedditTopicsState, action: RedditTopicsReducer) => {
    //     return {
    //         ...state,
    //         title: action.payload.title,
    //         link_name: action.payload.link_name,
    //         end_point: action.payload.end_point
    //     };
    // },

    // changeTopic: create.asyncThunk(
        
    // ),

    resetTopic: () => {
        return {
            title: "Nature",
            link_name: "nature",
            end_point: "r/nature",
            numberOfPosts: 10,
            step: 10,
            posts: [],
            status: "idle"
        };
    }
};


export const redditTopicsSlice = createAppSlice({
    name: "redditTopics",
    initialState,
    reducers: create => ({
        changeTopic: create.asyncThunk(
            async (inputData: InputData) => {
                const response = await fetchRedditPosts(inputData);
                return response.data;
            },
            {
                pending: state => {
                  state.status = "loading"
                },
                fulfilled: (state, action) => {
                  state.title = action.payload.title
                  state.end_point = action.payload.end_point
                  state.status = "idle"
                  state.posts = action.payload.posts
                },
                rejected: state => {
                  state.status = "failed"
                },
              },
        ),
    }),
    selectors: {
        redditTitle: (state: RedditTopicsState) => state.title,
        redditLink: (state: RedditTopicsState) => state.link_name,
        redditEndPoint: (state: RedditTopicsState) => state.end_point,
        redditPosts: (state: RedditTopicsState) => state.posts
    }
});


export const { changeTopic } = redditTopicsSlice.actions;
export const {redditTitle, redditLink, redditEndPoint, redditPosts} = redditTopicsSlice.selectors;