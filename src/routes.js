import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Cadastro from '../src/pages/Cadastro';
import Perfil from '../src/pages/Perfil';


class Routes extends Component {
  render(){
  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/" exact component ={Cadastro}/>
        <Route path="/perfil" component ={Perfil}/>
      
      </Switch>
    </BrowserRouter>
  );
  }
}

export default Routes;