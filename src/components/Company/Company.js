import styles from "./Company.module.css"


const Company = (props) => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.header}>Company info:</div>
        <div className={styles.company}>
        <div> <b>name:</b> {props.user.company.name} </div>
        <div> <b>catchPhrase:</b> {props.user.company.catchPhrase} </div>
        <div> <b>bs:</b> {props.user.company.bs} </div>
        </div>
        </div>
    )
}

export default Company;