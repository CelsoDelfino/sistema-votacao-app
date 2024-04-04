import styles from './Chapa.module.css'

function AdicionarChapa(){
    return(
        <div className={styles.chapa_container}>
            <h1>ADICIONAR CHAPA</h1>
            <div className={styles.adicionarEmpregado_campos}>
            <label>Código: </label> 
            <input type='text' />
            <br></br>
            <br></br>
            <label>Sigla: </label> 
            <input type='text' />
            </div>
            <div>
            <label>Nome: </label> 
            <input type='text' />
            <label>Votos: </label> 
            <input type='text' />
            </div>
            <button className={styles.adicionarEmpregado}>Salvar</button>
        </div>
    )
}

export default AdicionarChapa