import React, { useEffect, useState} from 'react';
import Post_img from '../img/posts/un_par.jpg';
import './styles/Post.css';
import { Storage } from '../config/firebase.js';

const Post = (props) => {
    const [image, setImage] = useState('');

    useEffect( () => {
        Storage.ref(props.img).getDownloadURL().then(function(url) {
            setImage(url);
        })
    }, []);

    return (
        <div className='Post'>
            <div className="Post__content">
                <a href="/post/123">
                <div className='Post__Img' >
                    
                    <img src={image} alt="Imagen de Post"/>
                    <span className='Post_Txt'>{props.title}</span>
                </div>
                </a>
                
            </div>
            
        </div>
    )
}

export default Post;