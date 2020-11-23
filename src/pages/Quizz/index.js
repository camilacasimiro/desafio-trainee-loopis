import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu'


import "./style.css"

import Formularios from '../Quizz/ComponentQuizz/Formulario';

function Quizz() {
    return (
        <>
            <Menu />
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