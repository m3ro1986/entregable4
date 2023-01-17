import axios from 'axios';
import React from 'react';

const UsersList = ({users, showForm, getAllUsers, selectUser}) => {

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then( () => getAllUsers())
    }

    return (
        <>
            <div className='list-header'>
                <h2>Lista de Usuarios</h2> 
                <button onClick={showForm}> + Crea Nuevo Usuario </button>
            </div>
            <div className='users-container'>
            {
                users.map( user => (
                    <div key={user.id} className='user-container'>
                        <ul className='list-container'>
                            <li> <i className='bx bxs-user'></i> {user.first_name} {user.last_name}</li>
                            <li> <i className='bx bxs-envelope' ></i> {user.email}</li>
                            <li> <i className='bx bxs-cake'></i> {user.birthday}</li>
                        </ul>    
                        <div className='buttons'>
                            <button onClick={() => deleteUser(user)}> <i className='bx bxs-trash' ></i> </button>
                            <button onClick={() => selectUser(user)}> <i className='bx bxs-pencil' ></i> </button>
                        </div>
                    </div>
                ))    
            }
           </div>
        </>
    );
};

export default UsersList;