import styles from "./UserAddress.module.css"


const UserAddress = (props) => {
    return (
        <div className={styles.wrapper}>
         <div className={styles.header}>Address:</div>
        <div className={styles.address}>
        <div> <b>street:</b> {props.user.address.street} </div>
        <div> <b>suite:</b> {props.user.address.suite} </div>
        <div> <b>city:</b> {props.user.address.city} </div>
        </div>
        </div>
    )
}

export default UserAddress;