
function Formulario() {
    return (
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
            </div>
        </form>
    )
}
export default Formulario