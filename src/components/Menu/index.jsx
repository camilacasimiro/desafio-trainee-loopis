import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
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
        </div>
    )
}

export default Menu;