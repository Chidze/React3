import styles from './ShowComponent.module.css'
const ShowComponent = (props) => {
    return (
        <>
        {props.posts?.map((post) =>( 
    
           <div className={styles.post}> 
           <b>post:</b> {post.body}
           </div> 
        )
        )}
        </>
    )
}

export default ShowComponent ;