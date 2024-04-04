import styles from './Empregado.module.css'

function AdicionarEleicao(){
    return(
        <div className={styles.empregado_container}>
            <h1>ADICIONAR ELEIÇÃO</h1>
            <div className={styles.adicionarEmpregado_campos}>
            <label>Código: </label> 
            <input type='text' />
            <br></br>
            <br></br>
            <label>Nome: </label> 
            <input type='text' />
            </div>
            <button className={styles.adicionarEmpregado}>Salvar</button>
        </div>
    )
}

export default AdicionarEleicao