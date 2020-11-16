import React from 'react';

import "./style.css"
import Connection from '../../images/connection.png';
import Photo from '../../images/man.png'

function Perfil(){
    return (
        <div id="page-profile">
            <div className="image">
                <img src={Connection} alt="Connection" className="connection"></img>
            </div>

            <form className="form-profile">

                <h1>Cadastro - 2</h1>
                <div className="field">
                    <div className="field-1">
                        
                        <img src={Photo} alt="Foto do Usuário" className="photo"></img>
                        <input type="file"></input>
                       
                        <label className="genere">Gênero:</label>
                        <input type="checkbox"></input>
                        <label>Feminino</label>

                        <input type="checkbox" className="man"></input>
                        <label >Masculino</label>
                        
                    </div>

                    <div className="field-2">

                        <label className="date"> Data Nasc.:</label>
                        <input type="date"></input>

                        <label>Cidade:</label>
                        <input type="name"></input>

                        <label className="number">Tel.</label>
                        <input type="tel"></input>
                    </div>
                </div>

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Perfil;