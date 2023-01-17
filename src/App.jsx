import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';


function App() {

  const [ users, setUsers ] = useState([])
  const [ updatedUser, setUpdatedUser] = useState(null)
  const [ form, setForm ] = useState(false)

  const getAllUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then( res => setUsers( res.data ))
  }

  const showForm = () => {
    setForm( true )
  }

  const hideForm = () => {
    setForm( false )
  }

  const selectUser = ( user ) => {
    setUpdatedUser( user );
    showForm()
  }

  useEffect( () => {
    getAllUsers()
  },[])


  return (
    <div className="App">
      { form && 
      <UsersForm 
        getAllUsers={getAllUsers} 
        hideForm={hideForm} 
        updatedUser={updatedUser}
        selectUser={selectUser}
      />
      }
      
      <UsersList 
        users={users} 
        showForm={showForm} 
        getAllUsers={getAllUsers}
        selectUser={selectUser}
      />
    </div>
  )
}

export default App
