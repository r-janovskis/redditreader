//import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"


export interface RedditTopicsState {
    title: string
    link_name: string
    end_point: string
  }

  interface RedditTopicsReducer {
    payload: {
        title: string
        link_name: string
        end_point: string
    }
  }
  
  const initialState: RedditTopicsState = {
    title: "Nature",
    link_name: "nature",
    end_point: "r/nature"
  };

const redditTopicsReducer = {
    changeTopic: (state: RedditTopicsState, action: RedditTopicsReducer) => {
        return {
            title: action.payload.title,
            link_name: action.payload.link_name,
            end_point: action.payload.end_point
        };
    },

    resetTopic: () => {
        return {
            title: "Nature",
            link_name: "nature",
            end_point: "r/nature"
        };
    }
};


export const redditTopicsSlice = createAppSlice({
    name: "redditTopics",
    initialState,
    reducers: create => ({
        changeTopic: create.reducer(redditTopicsReducer.changeTopic),
        resetTopic: create.reducer(redditTopicsReducer.resetTopic),
    }),
    selectors: {
        redditTitle: (state: RedditTopicsState) => state.title,
        redditLink: (state: RedditTopicsState) => state.link_name,
        redditEndPoint: (state: RedditTopicsState) => state.end_point
    }
});


export const { changeTopic, resetTopic } = redditTopicsSlice.actions;
export const {redditTitle, redditLink, redditEndPoint} = redditTopicsSlice.selectors;