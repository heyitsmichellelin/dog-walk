import React from "react";
import magnifying_glass from '../../../images/magnifying_glass.png'
import styles from './search_bar.module.css';

function Search() {
    return (
        <form>
            <input type="text" placeholder="Where is your next adventure?" className={styles.searchbar}></input>
            <input type="image" src={magnifying_glass} alt="Submit" width='28' height='28' className={styles.magnifying_glass}></input>
        </form>
         
    )
}

export default Search;