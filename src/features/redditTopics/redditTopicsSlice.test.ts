import type { AppStore } from "../../app/store";
import { makeStore } from "../../app/store";
import type { RedditTopicsState } from "./redditTopicsSlice";
import { changeTopic, resetTopic, redditTopicsSlice } from "./redditTopicsSlice";

interface LocalTestContext {
  store: AppStore;
}

describe<LocalTestContext>("redditTopics reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: RedditTopicsState = {    
      title: "Nature",
      link_name: "nature",
      end_point: "r/nature"
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

})