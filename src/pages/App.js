import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

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
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
