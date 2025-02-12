import type { AppStore } from "../../app/store";
import { makeStore } from "../../app/store";
import type { RedditTopicsState } from "./redditTopicsSlice";
import { fetchRedditPosts } from "./redditTopicsAPI";
import { changeTopic, resetTopic, redditTopicsSlice } from "./redditTopicsSlice";

interface LocalTestContext {
  store: AppStore;
}

const initialPosts = await fetchRedditPosts("r/nature", "Nature", 10);

describe<LocalTestContext>("redditTopics reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: RedditTopicsState = {    
      title: "Nature",
      link_name: "nature",
      end_point: "r/nature",
      numberOfPosts: 10,
      step: 10,
      posts: initialPosts.data
    }

    const store = makeStore({ redditTopics: initialState })

    context.store = store
})


it("should handle initial state", () => {
    expect(redditTopicsSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      title: "Nature",
      link_name: "nature",
      end_point: "r/nature"
    })
})

it("should handle changeTopic", ({ store }) => {
  expect(store.getState().redditTopics.title).toBe("Nature")

  store.dispatch(changeTopic({title: "Science", link_name: "science", end_point: "r/science"}))
  expect(store.getState().redditTopics.title).toBe("Science")
})

it("should handle resetTopic", ({ store}) => {
  expect(store.getState().redditTopics.title).toBe("Nature")

  store.dispatch(changeTopic({title: "Books", link_name: "books", end_point: "r/books"}))
  expect(store.getState().redditTopics.title).toBe("Books")

  store.dispatch(resetTopic())
  expect(store.getState().redditTopics.title).toBe("Nature")
  expect(store.getState().redditTopics.link_name).toBe("nature")
  expect(store.getState().redditTopics.end_point).toBe("r/nature")
})

})