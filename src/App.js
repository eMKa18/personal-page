import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";


function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
