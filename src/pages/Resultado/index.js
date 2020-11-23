import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
import Result from '../../images/result.png';
import Boy from '../../images/boy.jpg';
import Girl from '../../images/girl.jpg';
import Girl2 from '../../images/girl-2.jpg';

function Resultado() {
    return (
        <div id="page-result">
            <nav className="menu-result">
                <h3>Apê-Match</h3>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/quizz">
                            Quizz
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
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
                            <img src={Girl} alt=""></img>
                            <div>
                                <p>Ana Leítca</p>
                                <p>20</p>
                                <p>Patos-PB</p>
                                <p>FSM</p>
                                <p>Tel.: 987254766</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Boy} alt=""></img>
                            <div>
                                <p>Carlos Augusto</p>
                                <p>22</p>
                                <p>Pombal-PB</p>
                                <p>IFPB</p>
                                <p>Tel.: 928862446</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Girl2} alt=""></img>
                            <div>
                                <p>Maria Alice </p>
                                <p>21</p>
                                <p>Malta-PB</p>
                                <p>FAFIC</p>
                                <p>Tel.: 981236925</p>
                            </div>

                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default Resultado;