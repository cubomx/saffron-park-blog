import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from '../components/Navbar';

import Home from './Home';
import Entry from './Entry';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './styles/App.css';

function App() {
  const [name, setName] = useState('Sergio');

  const handleClick = () => {
    setName("Mike");
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path= "/" component={Home}/>
          <Route exact path="/post/:id" component={Entry}/>
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
