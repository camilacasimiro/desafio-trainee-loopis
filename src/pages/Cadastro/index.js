import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import firebase from '../../services/firebase';
import 'firebase/auth';

import "./style.css"
import Connection from '../../images/connection.png';
import Arrow from "../../images/seta.png";


function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function Register() {
        if (!email || !password) {
            alert("Campo(s) não preenchido(s)");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(resultado => {
            alert("Cadastrado com sucesso!");
        }).catch(erro => {
            alert(erro);
        });

    }


    return (
        <div id="page-cad">
            <div className="image">
                <img src={Connection} alt="Connection"></img>
            </div>

            <form className="form-cad">
                <div className="come-back-home">
                    <Link to="/">
                        <img src={Arrow} alt="Voltar para home"></img><p>Home</p>
                    </Link>
                </div>


                <h1>Cadastro</h1>
                <div className="field">
                    <label>Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email"></input>

                    <label>Senha:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
                </div>

                <button onClick={Register} type="button" >Confirmar</button>

                <Link to="/login">
                    <p className="link-login">Ir para o Login</p>
                </Link>


            </form>
        </div>
    );
}

export default Cadastro;