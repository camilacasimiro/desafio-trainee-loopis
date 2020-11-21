import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import firebase from '../../services/firebase';
import 'firebase/auth';

import "./style.css"
import Connection from '../../images/connection.png';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Autentic() {
        if (!email || !password) {
            alert("Campo(s) não preenchido(s)");
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email,password).then(resultado => {
            console.log(resultado['user']['uid']);
            window.location.href = "http://localhost:3001/resultado?uid=${resultado['user']['uid']}";
            
        }).catch(erro => {
            alert(erro);
        });
    }

    return (
        <div id="page-login">
            <div className="image">
                <img src={Connection} alt="Connection"></img>
            </div>

            <form className="for-login">
               
                    <h1>Login</h1>
                    <div className="field-login">
                        <label>Email:</label>
                        <input id="email" onChange={(e) => setEmail(e.target.value)} type="email"></input>

                        <label>Senha:</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
                    </div> 
                     <Link>
                    <button  onClick={Autentic}type="button" >Entrar</button>  
                    </Link> 
            </form>
        </div>
    );
}

export default Login;
