import { LoremIpsum } from "react-lorem-ipsum"
import styles from './Frase.module.css'

function Frase(){

    return (
        <div className={styles.fraseContainer}>
            <h3>Lorem - segundo componente</h3>
            <p className={styles.fraseContent}>
                <LoremIpsum />
            </p>
        </div>
    )

}

export default Frase