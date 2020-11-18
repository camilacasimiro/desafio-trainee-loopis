import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"

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
                    <div className='CardQuestions' >
                        <h1 className='textoDentrodoCard' >Espaço Para peguntas</h1>
                        <ul className='esteticaforms'>
                            <li>
                                <label for="">Opção 1</label>
                                <input type="radio" name="" value="" />
                            </li>
                            <label for="">Opção 2</label>
                            <input type="radio" name="" value="" />
                            <li>
                                <label for="">Opção 3</label>
                                <input type="radio" name="" value="" />
                            </li>
                            <label for="">Opção 4</label>
                            <input type="radio" name="" value="" />
                            <li>
                                <label for="">Opção 5</label>
                                <input type="radio" name="" value="" />
                            </li>
                        </ul>
                        <Link to="/perfil">
                            <button classname="button" type="submit" >Proximo</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Quizz;