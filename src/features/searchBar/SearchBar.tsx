"use client";
import style from "./SearchBar.module.css";

export const SearchBar = () => {
    return (
        <div className={style.searchBar}>
            <label htmlFor="searchPosts">Search Posts:</label>
            <input id="searchPosts" type="text" placeholder="Search posts..." />
        </div>
    );
};