import './App.css';
import Home from './Home/Home'
import { useState, useEffect } from 'react'
import CategoryNews from './categoryNews/CategoryNews'; 


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <Router>
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/categoryNews/:category">
        <CategoryNews/>
        
      </Route >     
    </Switch>
  </Router>
  );
}

export default App;
