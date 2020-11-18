import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Cadastro from '../src/pages/Cadastro';
import Perfil from '../src/pages/Perfil';
import Login from '../src/pages/Login';
import Quizz from '../src/pages/Quizz';


class Routes extends Component {
  render(){
  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/" exact component ={Cadastro}/>
        <Route path="/perfil" component ={Perfil}/>
        <Route path="/Login" component ={Login}/>
        <Route path="/Quizz" component ={Quizz}/>
      
      </Switch>
    </BrowserRouter>
  );
  }
}

export default Routes;