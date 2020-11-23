import React from 'react';
import { Link } from 'react-router-dom';


import "./style.css"

import Formularios from '../Quizz/ComponentQuizz/Formulario';

function Quizz() {
    return (
        <>
            <header className="header">
                <h3>Apê-Match</h3>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quizz">Quizz</Link></li>
                        <li><Link to="/">Sair</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <form>
                    <div className="EtruturaDosFormularios" >
                        <Formularios></Formularios>

                    </div>
                </form>
            </div>
            <div id="locbutton" >
                <Link to="/resultado">
                    <button type="submit" >Entrar</button>
                </Link>
            </div>
        </>
    );
}

export default Quizz;