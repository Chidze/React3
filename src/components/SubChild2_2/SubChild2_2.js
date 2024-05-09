import styles from './SubChild2_2.module.css'
import { AppContext } from "../../App.js";
import { useContext   } from "react";

const SubChild2_2 = () => {
    const appContext = useContext(AppContext)
    return (
        <div>
            <div className={styles.header}>SubChild2_2</div>
            <div className={styles.text}>{appContext.answer}</div>
        </div>
        
    )
}

export default SubChild2_2;