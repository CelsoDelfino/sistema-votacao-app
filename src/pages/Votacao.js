import styles from './Votacao.module.css'

function Votacao(){
    return(
        <div className={styles.votacao_container}>
            <h1>TELA DE VOTAÇÃO</h1>
            
            <label>Nome do Eleitor: </label> 
            <input className={styles.input} type='text' />
            
            <div>
            <br/>
            <label>Chapa: </label> 
            <input type='text' />
            <button className={styles.votacao_botao_pesquisar}>pesquisar</button>
            </div>
            <br></br>
            <p className={styles.votacao_nomechapa}>Nome da chapa</p>
            <br></br>

            <div>
                <button className={styles.votacao_botao_confirmar}>CONFIRMAR</button>
                <button className={styles.votacao_botao_limpar}>LIMPAR</button>
                <button className={styles.votacao_botao_branco}>BRANCO</button>
            </div>
        </div>
    )
}

export default Votacao