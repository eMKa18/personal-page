import React from 'react';
import './App.css';
import Sidebar from './components/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Sidebar}/>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
