import React from "react";
import background from '../../../images/walking-dog.gif';
import Bar from './../SearchBar/search_bar.jsx';
import AutoSearch from './../SearchBar/auto_search.jsx';
import styles from './home.module.css'

function Home() {
    return (
        <div>
            <h1 id='title'>Is it too hot for my dog to walk?</h1>
            <div className={styles.search_area}>
                <AutoSearch/>
            </div>
            <div className={styles.graphic}>
                <img src={background} alt='walking dog' className={styles.dog_gif}/>
            </div>
            
        </div>
    )
}

export default Home;