import styles from './SubChild1_2.module.css'
import { AppContext } from "../../App.js";
import { useContext   } from "react";
const SubChild1_2 = () => {
    const appContext = useContext(AppContext);
    appContext.answer = 'Great!Thank you';
    return (
        <div>
        <div className={styles.header}>SubChild1_2</div>
        <div className={styles.text}>{appContext.greeting}</div>
        </div>
    )
}

export default SubChild1_2;