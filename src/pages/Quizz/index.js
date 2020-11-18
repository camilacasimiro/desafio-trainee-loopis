import React from 'react';
import { Link } from 'react-router-dom';


import "./style.css"

import Formulario from "../Quizz/ComponentQuizz/Formulario"

function Quizz() {
    return (
        <>
            <header class="header">
                <a href="/">Logo</a>
                <nav>
                    <ul class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quizz</a></li>
                        <li><a href="/">Sair</a></li>
                    </ul>
                </nav>
            </header>
            <div>
                <form >
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
        </>
    );
}

export default Quizz;