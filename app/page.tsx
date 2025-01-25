import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { Post } from "./components/post/Post";

export default function IndexPage() {
  return (
    <>
      {/* <Counter /> */}
      <Post />
    </>
  );
}

export const metadata: Metadata = {
  title: "Reddit Reader",
  icons:  "/logo.png" ,
};
