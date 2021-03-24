import React, { Fragment, useEffect, useState } from 'react';
import './styles/Home.css';
import Post from '../components/Post';

import { Auth, Firestore } from '../config/firebase.js';




const Home = () => {
  console.log("empece");
    let password ='cubomx1998', email='checo.mex@hotmail.com';
    const [data, setData] = useState([]);
  const handleAuth = () => {
    console.log(password);
    console.log("heho")
    Auth.createUserWithEmailAndPassword(email, password)
      .then( () => { 
        console.log("Hello")
      })
      .catch( error => {
        console.log(error)
      })  
  }

  const fetchPosts = () => {
    const firestore = Firestore.collection("blog");
    firestore.limit(3).get().then( (querySnapshot) => {
      querySnapshot.forEach( (doc) => {
        var item = doc.data();
        setData(data => [...data, item]);
      })
    });
  }

  useEffect( () => {
    fetchPosts();
  }, [])


    return(
        <div className="Home">
            <div className="Home-content">
                <h1>Bienvenido a Saffron Park</h1>

                { 
                data && data.map( (post, index)  => {
                  console.log(data)
                  return(
                    <Post key={index} title={post.title}/>
                  )
                  
                })}
                <button onClick={handleAuth}>Iniciar Sesión</button>
            </div>
            
        </div>
        
    )
}

export default Home;