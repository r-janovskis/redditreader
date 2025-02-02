import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Quotes } from "./features/quotes/Quotes";
import { SearchBar } from "./features/searchBar/SearchBar";
import { RedditTopics } from "./features/redditTopics/RedditTopics";
import { Post } from "./features/post/Post";
import { Logo } from "./features/logo/Logo";
import logo from "./../logo.png"

const App = () => {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo />
        <SearchBar />
        <RedditTopics />
      </header>
      <main>
        <h1>Main part of the page</h1>
        { [1,2,3,4,5].map( (item) => <Post key={item} postNr={item} /> )}
      </main>
      <footer>
        <p>@Reddit Reader, 2025. Created by <span className="bold">Reinis Janovskis</span></p>
      </footer>
    </div>
  )
}

export default App
