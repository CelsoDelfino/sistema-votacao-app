import { IoIosAddCircle   } from 'react-icons/io'
import { MdEditDocument } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import styles from './Chapa.module.css'
import { Link }from 'react-router-dom';

function Chapa(){
    return(
        <div className={styles.chapa_container}>
            <h1>CHAPA</h1>
            <Link to='/AdicionarChapa' className={styles.chapa_adicionar}>Adicionar</Link>
            <IoIosAddCircle size='20px'/>
            <br></br>
            <div className={styles.chapa_lista}>
            <p>Dados da chapa 1 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados da chapa 2 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados da chapa 3<MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            <p>Dados da chapa 4 <MdEditDocument cursor='pointer'/> <FaTrashAlt cursor='pointer'/></p>
            </div>
        </div>
        
    )
}

export default Chapa