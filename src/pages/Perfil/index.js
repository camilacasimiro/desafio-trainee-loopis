import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
import Connection from '../../images/connection.png';
import Arrow from "../../images/seta.png";
import firebase from '../../services/firebase';


function Perfil() {

    const [genero, setGenero] = useState('');
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [foto, setFoto] = useState('');

    const storage = firebase.storage();
    const db = firebase.firestore();

    function Perfil() {
        storage.ref(`image/${foto.name}`).put(foto).then(() => {
            db.collection('ape').add({
                genero: genero,
                nome: nome,
                data: data,
                cidade: cidade,
                telefone: telefone,
                foto: foto.name,
            }).then(() => {
                alert("Dados cadastrados com sucesso");

                setTimeout(() => {
                    window.location.href = "/quizz"
                },
                    2000);
            })
        }).catch(erro => {
            alert(erro);
        });
    }

    return (
        <div id="page-profile">
            <div className="image">
                <img src={Connection} alt="Connection" className="connection"></img>
            </div>

            <form className="form-profile">
                <div className="come-back-home">
                    <Link to="/">
                        <img src={Arrow} alt="Voltar para home"></img>
                        <p>Home</p>
                    </Link>
                </div>

                <h1>Perfil</h1>
                <div className="field">
                    <div className="field-1">

                        <div class="photo">
                            <label>Selecione uma Foto</label>
                            <input onChange={(e) => setFoto(e.target.files[0])} type="file" ></input>
                        </div>

                        <label className="genere">Gênero:</label>
                        <select onChange={(e) => setGenero(e.target.value)}>
                            <option disable selected value> Selecione um tipo</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Prefiro não identificar</option>
                        </select>

                    </div>

                    <div className="field-2">

                        <label>Nome</label>
                        <input onChange={(e) => setNome(e.target.value)} type="name"></input>

                        <label className="date"> Data Nasc.:</label>
                        <input onChange={(e) => setData(e.target.value)} type="date"></input>

                        <label>Cidade:</label>
                        <input onChange={(e) => setCidade(e.target.value)} type="name"></input>

                        <label className="number">Tel.</label>
                        <input onChange={(e) => setTelefone(e.target.value)} type="tel"></input>
                    </div>
                </div>

                <button onClick={Perfil} type="button">Próximo</button>

            </form>
        </div>
    );
}

export default Perfil;