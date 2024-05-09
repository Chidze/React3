import styles from "./UserComponent.module.css"
import UserDetails from "../UserDetails/UserDetails"
import UserAddress from "../UserAddress/UserAddress";
import Company from "../Company/Company";
import { useEffect, useState } from 'react';
import ShowComponent from "../ShowComponent/ShowComponent";


const UserComponent = (props) => {
    const [posts,  setPosts] = useState([]);
    useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
      try {
          let response = await fetch('https://jsonplaceholder.typicode.com/posts')
          let data = await response.json()
          setPosts(data);
      } catch { }
  }
 

    return (
        <div className={styles.list}>
        {props.users?.map((user) =>(

            <div className={styles.profile}>
                <div className={styles.header}> User {user.id}</div>
                <UserDetails  user ={user} />
                <hr className={styles.line}/>
                <UserAddress user ={user} />
                <hr className={styles.line}/>
                <Company user = {user} />
                <button className={styles.button} onClick={() => props.toggleShow(user.id)} >Show Posts</button>
                {props.show[user.id] && <ShowComponent userId={user.id} posts={posts.filter(post => post.id === user.id)} />}
                </div>

                )
                )}
        </div>
    )

}

export default UserComponent;
