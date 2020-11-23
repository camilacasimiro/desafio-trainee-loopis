import React from 'react';
import {Link} from 'react-router-dom'

import "./style.css"
import home from '../../images/home.png';

function HomePage() {
    return (
        <div>
        <div className="degrade">
            <header className="headerHomepage">
                <h3>Apê-Match</h3>
                <nav>
                    <ul className="menuHomepage">
                        <li><Link to="/cadastro">Cadastre-se</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="imagetamanho">
                <img src={home} alt="home" ></img>
            </div>
            <div className="textoformato">
                <h1>Um novo conceito para dividir quartos!</h1>
            </div>
        </div>
        </div>
    )
}

export default HomePage;