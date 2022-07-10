import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import background from '../../../images/walking-dog.gif';
import Bar from './../SearchBar/search_bar.jsx';
import styles from './home.module.css'

function Home() {
    return (
        <div>
            <h1 id='title'>Is it too hot for my dog to walk?</h1>
            <div className={styles.search_area}>
                <Bar></Bar>
            </div>
            <div className={styles.graphic}>
                <img src={background} alt='walking dog' className={styles.dog_gif}/>
            </div>
            
        </div>
    )
}

export default Home;