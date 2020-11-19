import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
import Result from '../../images/result.png';
import Elipse from '../../images/elipse.png';

function Resultado() {
    return (
        <div id="page-result">
            <nav className="menu-result">
                <ul>
                    <li>
                        <Link to="#">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/quizz">
                            Quizz
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
            <article>
                <div className="body-result">

                    <img src={Result} alt="Result" className="result"></img>

                    <div className="cards-result">
                        <div className="card">
                        <img src={Elipse} alt=""></img>
                            <div>
                                <p>Nome</p>
                                <p>Idade</p>
                                <p>Cidade</p>
                                <p>Faculdade</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Elipse} alt=""></img>
                            <div>
                                <p>Nome</p>
                                <p>Idade</p>
                                <p>Cidade</p>
                                <p>Faculdade</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Elipse} alt=""></img>
                            <div>
                                <p>Nome</p>
                                <p>Idade</p>
                                <p>Cidade</p>
                                <p>Faculdade</p>
                            </div>
                            
                        </div>
                        <div className="card">
                            <img src={Elipse} alt=""></img>
                            <div>
                                <p>Nome</p>
                                <p>Idade</p>
                                <p>Cidade</p>
                                <p>Faculdade</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default Resultado;