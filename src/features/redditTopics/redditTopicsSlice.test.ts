import type { AppStore } from "../../app/store";
import { makeStore } from "../../app/store";
import type { RedditTopicsState } from "./redditTopicsSlice";
import { fetchRedditPosts } from "./redditTopicsAPI";
import { changeTopic, redditTopicsSlice } from "./redditTopicsSlice";

interface LocalTestContext {
  store: AppStore;
}

const initialPosts = await fetchRedditPosts({end_point: "r/nature", title: "Nature", numberOfPosts:10});

describe<LocalTestContext>("redditTopics reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: RedditTopicsState = {    
      title: "Nature",
      link_name: "nature",
      end_point: "r/nature",
      numberOfPosts: 10,
      step: 10,
      posts: initialPosts.data,
      status: "idle"
    }

    const store = makeStore({ redditTopics: initialState })

    context.store = store
})


// it("should handle initial state", () => {
//     expect(redditTopicsSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
//       title: "Nature",
//       link_name: "nature",
//       end_point: "r/nature"
//     })
// })


// Handle changeTopic with async thunk by making whole test to be async
it("should handle changeTopic", async ({ store }) => {
  expect(store.getState().redditTopics.title).toBe("Nature")

  await store.dispatch(changeTopic({title: "Science", numberOfPosts: 10, end_point: "r/science"}))
  expect(store.getState().redditTopics.title).toBe("Science")
})



it("should handle changeTopic Back to nature (reset topic)", async ({ store}) => {
  expect(store.getState().redditTopics.title).toBe("Nature")

  await store.dispatch(changeTopic({title: "Books", numberOfPosts: 10, end_point: "r/books"}))
  expect(store.getState().redditTopics.title).toBe("Books")

  await store.dispatch(changeTopic({title: "Nature", numberOfPosts: 10, end_point: "r/nature"}))
  expect(store.getState().redditTopics.title).toBe("Nature")
  expect(store.getState().redditTopics.link_name).toBe("nature")
  expect(store.getState().redditTopics.end_point).toBe("r/nature")
})

})