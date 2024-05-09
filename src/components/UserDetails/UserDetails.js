import styles from "./UserDetail.module.css"


const UserDetails = (props) => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.header}>User info:</div>
        <div className={styles.user}>
        <div> <b>id:</b> {props.user.id} </div>
        <div> <b>name:</b> {props.user.name} </div>
        <div> <b>username:</b> {props.user.username} </div>
        <div> <b>email:</b> {props.user.email} </div>
        <div> <b>phone:</b> {props.user.phone} </div>
        <div> <b>website:</b> {props.user.website} </div>
        </div>
        </div>
    )
}

export default UserDetails;