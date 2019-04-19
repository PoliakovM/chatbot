import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './auth/loginPage/login';
import RegisterComponent from './auth/registerPage/register';
import MenuAppBar from './pages/shared/fullLayoutPage/fullLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        
          <Route path="/home" component ={MenuAppBar}/>
          <Route path="/register" component ={RegisterComponent}/>
          <Route path="/" component ={LoginComponent} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
