import React from 'react';
import { Link } from 'react-router-dom';


import "./style.css"

import Formulario from "../Quizz/ComponentQuizz/Formulario"

function Quizz() {
    return (
        <>
            <header className="header">
                <a to="">Logo</a>
                <nav>
                    <ul className="menu">
                        <li><a to="">Home</a></li>
                        <li><a to="">Quizz</a></li>
                        <li><a to="">Sair</a></li>
                    </ul>
                </nav>
            </header>
            <div>
                <form>
                    <div className="EtruturaDosFormularios" >
                        <Formulario></Formulario>
                        <Formulario></Formulario>
                        <Formulario></Formulario>
                        <Formulario></Formulario>
                        <Formulario></Formulario>
                        <Formulario></Formulario>
                    </div>
                </form>
            </div>
            <div id="locbutton" >
            <Link to="/perfil">
                <button type="submit" >Entrar</button>
            </Link>
            </div>
        </>
    );
}

export default Quizz;