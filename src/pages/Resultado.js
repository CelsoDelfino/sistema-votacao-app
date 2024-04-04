import styles from './Resultado.module.css'

import { Link }from 'react-router-dom';


function Resultado(){
    return(
        <div className={styles.resultado_container}>
            <h1>RESULTADO DA VOTAÇÃO</h1>
            <h4 className={styles.resultado_votos}>TOTAL DE VOTOS: 4</h4>
            <ul className={styles.resultado_lista_votos}>
                <li>Nome da chapa 1: <strong>3 votos</strong></li>
                <li>Nome da chapa 2: <strong>2 votos</strong></li>
                <li>Nome da chapa 3: <strong>1 voto</strong></li>
                <li>Nome da chapa 4: <strong>4 votos</strong></li>
            </ul>
            <br></br>
            <Link to='/' className={styles.resultado_button}>Nova Votação</Link>
        </div>
    )
}

export default Resultado