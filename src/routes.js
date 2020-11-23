import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Cadastro from '../src/pages/Cadastro';
import Perfil from '../src/pages/Perfil';
import Login from '../src/pages/Login';
import Quizz from '../src/pages/Quizz';
import Resultado from '../src/pages/Resultado';
import HomePage from '../src/pages/HomePage';

class Routes extends Component {
  render(){
  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/" exact component ={Cadastro}/>
        <Route path="/perfil" component ={Perfil}/>
        <Route path="/login" component ={Login}/>
        <Route path="/quizz" component ={Quizz}/>
        <Route path="/resultado" component ={Resultado}/>
        <Route path="/HomePage" component ={HomePage}/>

      
      </Switch>
    </BrowserRouter>
  );
  }
}

export default Routes;