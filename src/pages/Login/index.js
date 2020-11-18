import React from 'react';
import{Link} from 'react-router-dom';

import "./style.css"
import Connection from '../../images/connection.png';

function Login(){
    return (
        <div id="page-cad">
            <div className="image">
                <img src={Connection} alt="Connection"></img>
            </div>

            <form className="form-cad">
               
                    <h1>Login</h1>
                    <div className="field">
                        <label>Email:</label>
                        <input type="email"></input>

                        <label>Senha:</label>
                        <input type="password"></input>
                    </div>

                    <Link to="/perfil">
                       <button type="submit" >Entrar</button>
                    </Link>
            </form>
        </div>
    );
}

export default Login;
