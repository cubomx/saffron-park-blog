import React from 'react';
import Post_img from '../img/posts/un_par.jpg';
import './styles/Post.css';

const Post = (props) => {
    return (
        <div className='Post'>
            <div className="Post__content">
                <a href="/post/123">
                <div className='Post__Img' >
                    <img src={Post_img} alt="Imagen de Post"/>
                    <span className='Post_Txt'>{props.title}</span>
                </div>
                </a>
                
            </div>
            
        </div>
    )
}

export default Post;