
//import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"
import { fetchComments } from "./commentsAPI"


export interface CommentsState {
    id: string
    comments: any[]
    status: "idle" | "loading" | "failed"
  }

  interface RedditTopicsReducer {
    payload: {
        title: string
        link_name: string
        end_point: string
    }
  }
  
  const initialState: CommentsState = {
    id: "",
    comments: [],
    status: "idle"
  };



export const commentsSlice = createAppSlice({
    name: "postComments",
    initialState,
    reducers: create => ({
        getComments: create.asyncThunk(
            async (inputData: any) => {
                const response = await fetchComments(inputData.post_id, inputData.subreddit);
                
                return response.data;
            },
            {
                pending: state => {
                  state.status = "loading"
                },
                fulfilled: (state, action) => {
                  //console.log(action.payload.comments);
                  state.id = action.payload.id
                  state.comments = action.payload.comments
                  state.status = "idle"
                },
                rejected: state => {
                  state.status = "failed"
                },
              },
        ),
        resetComments: create.reducer( state => {
          state.id = "",
          state.comments = [],
          state.status = "idle"
        })
    }),
    selectors: {
        redditPostComments: (state: CommentsState) => state.comments,
        postId: (state: CommentsState) => state.id
    }
});


export const { getComments, resetComments } = commentsSlice.actions;
export const { redditPostComments, postId } = commentsSlice.selectors;