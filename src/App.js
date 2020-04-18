import React from 'react';
import './App.css';
import Login from './components/Login'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import MainData from './components/MainData'



function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
       <Route path="/" exact component={Login} />
       <Route path="/main" exact component={MainData} />
       
      </div>
    </Switch>
    </Router>
  );
}

export default App;
