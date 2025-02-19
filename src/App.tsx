import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Quotes } from "./features/quotes/Quotes";
import { SearchBar } from "./features/searchBar/SearchBar";
import { RedditTopics } from "./features/redditTopics/RedditTopics";
import { Post } from "./features/post/Post";
import { Logo } from "./features/logo/Logo";
import { redditPosts, redditTitle } from "./features/redditTopics/redditTopicsSlice";
import { useSelector } from "react-redux";

const App = () => {
  
  const posts= useSelector(redditPosts);
  const topic = useSelector(redditTitle);

  return (
    <div className="App">
      <header className={`sticky-top`}>
        <Logo />
        <SearchBar />
        <RedditTopics />
      </header>
      <main>
        <h1>Reddit {topic} Posts</h1>
        { posts.map( (item, index) => <Post key={index} index={index} title={item.title} end_point={item.endpoint} picture={item.image} description={item.selftext} id={item.id} author={item.author} /> )}
      </main>
      <footer>
        <p>@Reddit Reader, 2025. Created by <span className="bold">Reinis Janovskis</span></p>
      </footer>
    </div>
  )
}

export default App
