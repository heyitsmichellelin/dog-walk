import React from "react";
import styles from './search_bar.module.css';

function Search() {
    return (
         <input type="text" placeholder="Where is your next adventure?" className={styles.searchbar}></input>
    )
}

export default Search;