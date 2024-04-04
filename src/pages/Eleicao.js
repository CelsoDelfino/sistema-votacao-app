import styles from './Eleicao.module.css'
import { IoIosAddCircle   } from 'react-icons/io'
import { MdEditDocument } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

import { Link }from 'react-router-dom';


function Eleicao(){
    return(
        <div className={styles.eleicao_container}>
            <h1>ELEICÃO</h1>
            <Link to='/AdicionarEleicao' className={styles.eleicao_button_adicionar}>Adicionar</Link>
            <IoIosAddCircle size='20px'/>
            <br></br>
            <div className={styles.eleicao_lista}>
            <p>Eleicao 1 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Eleicao 2 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Eleicao 3 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Eleicao 4 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            </div>
        </div>
    )
}

export default Eleicao