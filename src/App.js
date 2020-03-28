import React from 'react';
import './App.css';
import Header from './components/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Header}/>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
