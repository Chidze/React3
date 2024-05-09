import './App.css';
import { createContext, useEffect, useState } from 'react';
import UserComponent from './components/UserComponent/UserComponent';
import Child1 from './components/Child1/Child1';
import Child2 from './components/Child2/Child2';

export const AppContext = createContext(null)
const App = () => {
  const [users,  setUsers] = useState([]);
  const greeting = 'Hello!How are you?';
  const answer = '';

  const [show, setShow] = useState({});

  const toggleShow = (userId) => {
      setShow(prevShow => ({
          ...prevShow,
          [userId]: !prevShow[userId]
      }));
  };

  useEffect(() => {
    getUsers();
}, []);


const getUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        setUsers(data);
    } catch { }
}
  return (
    <div className='wrapper'>
     <UserComponent users={users} toggleShow={toggleShow} show={show}/>
     <AppContext.Provider value={{greeting, answer}}>
     <Child1 />
     <Child2 />
     </AppContext.Provider> 
    </div>
    
  );
}

export default App;