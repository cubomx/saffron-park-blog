import React, { Fragment } from 'react';
import './styles/Home.css';
import Post from '../components/Post';



const Home = () => {
    return(
        <div className="Home">
            <div className="Home-content">
                <h1>Bienvenido a Saffron Park</h1>
                <Post />
                <Post />
                <Post />
            </div>
            
        </div>
        
    )
}

export default Home;