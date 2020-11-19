import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
import Connection from '../../images/connection.png';
import Arrow from "../../images/seta.png";

function Cadastro() {
    return (
        <div id="page-cad">
            <div className="image">
                <img src={Connection} alt="Connection"></img>
            </div>

            <form className="form-cad">
                <div className="come-back-home">
                    <img src={Arrow} alt="Voltar para home"></img>
                    <p>Home</p>
                </div>
                
                
                <h1>Cadastro</h1>
                <div className="field">
                    <label>Nome:</label>
                    <input type="name"></input>

                    <label>Email:</label>
                    <input type="email"></input>

                    <label>Senha:</label>
                    <input type="password"></input>
                </div>

                <Link to="/perfil">
                    <button type="submit" >Confirmar</button>
                </Link>
                
            </form>
        </div>
    );
}

export default Cadastro;