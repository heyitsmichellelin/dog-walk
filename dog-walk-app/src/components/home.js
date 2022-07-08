import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import background from '../images/walking-dog.gif';
import bar from './search_bar.js';

function Home() {
    return (
        <div>
            <h1 id='title'>Is it too hot for my dog to walk?</h1>
            <div>
                {bar}
            </div>
            <img src={background} alt='walking dog'/>
        </div>
    )
}

export default Home;