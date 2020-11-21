
function Formularios() {
    return (
        <>
        <div className='CardQuestions' >
            <h1 className='textoDentrodoCard' >Quais destas atitudes dos seus roommates mais te incomoda?</h1>
            <ul className='esteticaformulario'>
                <div className="TextoaEsquerda">
                <li>
                    <label htmlFor="musica">Escutar musica alto</label>
                    <input type="radio" name="formulario1" value="1" />
                </li>
                <label htmlFor="organização">Falta de organização</label>
                <input type="radio" name="formulario1" value="2" />
                <li>
                    <label htmlFor="horario">Chegar tarde na casa </label>
                    <input type="radio" name="formulario1" value="3" />
                </li>
                <label htmlFor="acordo">Não comprimento do acordo</label>
                <input type="radio" name="formulario1" value="4" />
                <li>
                    <label htmlFor="privacidade">Falta de respeito a privacidade</label>
                    <input type="radio" name="formulario1" value="5" />
                </li>
                </div>
            </ul>
        </div>
        <div className='CardQuestions' >
        <h1 className='textoDentrodoCard' >O que você gosta de fazer em seu tempo livre?</h1>
        <ul className='esteticaformulario'>
            <li>
                <label htmlFor="musica">Jogar</label>
                <input type="radio" name="formulario2" value="1" />
            </li>
            <label htmlFor="livro">Cozinhar</label>
            <input type="radio" name="formulario2" value="2" />
            <li>
                <label htmlFor="filme">Assistir a filmes</label>
                <input type="radio" name="formulario2" value="3" />
            </li>
            <label htmlFor="cozinhar">Escutar música</label>
            <input type="radio" name="formulario2" value="4" />
            <li>
                <label htmlFor="jogar">Ler um bom livro</label>
                <input type="radio" name="formulario2" value="5" />
            </li>
        </ul>
    </div>
    <div className='CardQuestions' >
            <h1 className='textoDentrodoCard'>Em qual faculdade voccê estuda ou irá estudar ? </h1>
            <ul className='esteticaformulario'>
                <li>
                    <label htmlFor="FSM">FSM</label>
                    <input type="radio" name="formulario3" value="1" />
                </li>
                <label forr="IFPM">IFPB</label>
                <input type="radio" name="formulario3" value="2" />
                <li>
                    <label htmlFor="FAFIC">FAFIC</label>
                    <input type="radio" name="formulario3" value="3" />
                </li>
                <label htmlFor="UFCG">UFCG</label>
                <input type="radio" name="formulario3" value="4" />
                <li>
                    <label htmlFor="SãoFranciso">São Francisco</label>
                    <input type="radio" name="formulario3" value="5" />
                </li>
            </ul>
        </div>
        <div className='CardQuestions' >
            <h1 className='textoDentrodoCard' >Com que frequência você irá chegar tarde em casa, durante a madrugada por exemplo?</h1>
            <ul className='esteticaformulario'>
                <li>
                    <label htmlFor="Nunca">Nunca</label>
                    <input type="radio" name="formulario4" value="1" />
                </li>
                <label htmlFor="Sempre">Sempre</label>
                <input type="radio" name="formulario4" value="2" />
                <li>
                    <label htmlFor="QuaseSempre">Quase Sempre</label>
                    <input type="radio" name="formulario4" value="3" />
                </li>
                <label htmlFor="DeVezEnquanto">De vez enquanto</label>
                <input type="radio" name="formulario4" value="4" />
                <li>
                    <label htmlFor="FinaisDeSemana">Apenas nos finais de semana</label>
                    <input type="radio" name="formulario4" value="5" />
                </li>
            </ul>
        </div>
        <div className='CardQuestions' >
            <h1 className='textoDentrodoCard' >Quais desses você  tipos de música você mais costuma ouvir?</h1>
            <ul className='esteticaformulario'>
                <li>
                    <label htmlFor="Rock">Rock</label>
                    <input type="radio" name="formulario5" value="1" />
                </li>
                <label htmlFor="Funk">Funk</label>
                <input type="radio" name="formulario5" value="2" />
                <li>
                    <label htmlFor="Gospel">Gospel</label>
                    <input type="radio" name="formulario5" value="3" />
                </li>
                <label htmlFor="Sertanejo">Sertanejo</label>
                <input type="radio" name="formulario5" value="4" />
                <li>
                    <label htmlFor="Ecletico">Sou bem ecletico(a)</label>
                    <input type="radio" name="formulario5" value="5" />
                </li>
            </ul>
        </div>
        <div className='CardQuestions' >
            <h1 className='textoDentrodoCard' >Qual sua opinião a respeito de animais na casa?</h1>
            <ul className='esteticaformulario'>
                <li>
                    <label htmlFor="Gosto">Gosto</label>
                    <input type="radio" name="formulario6" value="1" />
                </li>
                <label htmlFor="Tantofaz">Tanto faz</label>
                <input type="radio" name="formulario6" value="2" />
                <li>
                    <label htmlFor="Não gosto">Nãogosto</label>
                    <input type="radio" name="formulario6" value="3" />
                </li>
                <label htmlFor="Alergia">Tenho Alergia</label>
                <input type="radio" name="formulario6" value="4" />
                <li>
                    <label htmlFor="TenhoQueroter">Tenho/Quero ter</label>
                    <input type="radio" name="formulario6" value="5" />
                </li>
            </ul>
        </div>
    </>
    )
}
export default Formularios
