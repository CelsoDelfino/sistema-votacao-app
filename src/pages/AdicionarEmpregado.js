import styles from './Empregado.module.css'

function AdicionarEmpregado(){
    return(
        <div className={styles.empregado_container}>
            <h1>ADICIONAR CHAPA</h1>
            <div className={styles.adicionarEmpregado_campos}>
            <label>Matrícula: </label> 
            <input type='text' />
            <br></br>
            <br></br>
            <label>Nome: </label> 
            <input type='text' />
            </div>
            <div className={styles.adicionarEmpregado_campos}>
            <label>Cargo: </label> 
            <input type='text' />
            <label>Empresa: </label> 
            <input type='text' />
            </div>
            <br></br>
            <label>Terceirizado</label>
            <input type='checkbox'/>
            <br></br>
            <label>Empregado Próprio</label>
            <input type='checkbox' checked/>
            <button className={styles.adicionarEmpregado}>Salvar</button>
        </div>
    )
}

export default AdicionarEmpregado