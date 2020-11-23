import React from 'react';

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
                        <li><a to="">Cadastre-se</a></li>
                        <li><a to="">Sair</a></li>
                    </ul>
                </nav>
            </header>
            <div className="imagetamanho">
                <img src={home} alt="home" ></img>
            </div>
            <div className="textoformato">
                <h1>Um novo conceito para dividir quartos</h1>
            </div>
        </div>
        </div>
    )
}

export default HomePage;