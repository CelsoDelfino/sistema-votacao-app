import styles from './Empregado.module.css'
import { IoIosAddCircle   } from 'react-icons/io'
import { MdEditDocument } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Link }from 'react-router-dom';


function Empregado(){
    return(
        <div className={styles.empregado_container}>
            <h1>EMPREGADO</h1>
            <Link to='/AdicionarEmpregado' className={styles.empregado_adicionar}>Adicionar</Link>
            <IoIosAddCircle size='20px'/>
            <br></br>
            <div className={styles.empregado_lista}>
            <p>Dados do empregado 1 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados do empregado 2 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados do empregado 3 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados do empregado 4 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            </div>
        </div>
    )
}

export default Empregado