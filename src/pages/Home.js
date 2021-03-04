import React, { Fragment } from 'react';
import './styles/Home.css';
import Post from '../components/Post';

const Home = () => {
    return(
        <div className="Home">
            <h1>Bienvenido a Saffron Park</h1>
            <Post />
        </div>
        
    )
}

export default Home;