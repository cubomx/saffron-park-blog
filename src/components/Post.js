import React from 'react';
import Post_img from '../img/posts/un_par.jpg';
import './styles/Post.css';

const Post = () => {
    return (
        <div className='Post'>
            <h2>Última entrada: </h2>
            <div className='Post__Img'>
                <img src={Post_img} alt="Imagen de Post"/>
                <span className='Post_Txt'>Un par de palabras</span>
            </div>
        </div>
    )
}

export default Post;