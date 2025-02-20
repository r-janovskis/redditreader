"use client";
import style from "./SearchBar.module.css";


export const SearchBar = () => {

    const handleChange = (event: any) => {

        console.log(event.target.value);
        const regex = new RegExp(event.target.value, 'i');

        const postElements = document.getElementsByClassName("redditPost");
        
        for (let i = 0; i < postElements.length; i++) {
            console.log(`Looking at: ${postElements[i].getElementsByTagName('div')[0].getElementsByTagName('h2')[0].innerHTML}`)
            if(!postElements[i].getElementsByTagName('div')[0].getElementsByTagName('h2')[0].innerHTML.match(regex)){
                (postElements[i] as HTMLElement).style.display = "none";
                console.log(`${postElements[i].getElementsByTagName('div')[0].getElementsByTagName('h2')[0]} -> hide`);
            } else {
                (postElements[i] as HTMLElement).style.display = "block";
                console.log(`${postElements[i].getElementsByTagName('div')[0].getElementsByTagName('h2')[0].innerHTML} -> show`);
            }
        }
       
    };

    return (
        <div className={style.searchBar}>
            <input id="searchPosts" type="text" placeholder="Search posts for..." onChange={handleChange} />
        </div>
    );
};