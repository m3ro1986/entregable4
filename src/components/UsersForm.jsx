import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getAllUsers, hideForm, updatedUser, selectUser}) => {

    const{ handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if ( updatedUser ) {
            reset( updatedUser )
        } else {
            reset({
                first_name:"",
                last_name: "",
                email: "",
                password: "",
                birthday: ""
            })
        }
    }, [updatedUser])

    const submit = (data) => {
        if (updatedUser) {
            axios.put(`https://users-crud.academlo.tech/users/${updatedUser.id}/`, data)
                .then( () => {
                    getAllUsers()
                    selectUser()
                    hideForm()
                })
        } else {
            axios.post('https://users-crud.academlo.tech/users/', data)
                .then( () => {
                    getAllUsers()
                    hideForm()
                })
        }
    }

    return (
        <div className='form-container'>
            <i onClick={hideForm} className='bx bx-x'></i>
            <form onSubmit={handleSubmit(submit)}>

                <div className="input-container">
                    <label htmlFor="first_name">Nombre</label>
                    <input type="text" id='first_name' {...register('first_name')} required/>
                </div>

                <div className="input-container">
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" id='last_name' {...register('last_name')} required/>
                </div>  

                <div className="input-container">
                    <label htmlFor="email">Correo</label>
                    <input type="text" id='email' {...register('email')} required/>
                </div> 

                <div className="input-container">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' {...register('password')} required/>
                </div> 

                <div className="input-container">
                    <label htmlFor="birthday">Fecha de Cumpleaños</label>
                    <input type="Date" id='birthday' {...register('birthday')} required/>
                </div>  

                <button> { updatedUser ? 'update' : 'Submit' } </button>  

            </form>
        </div>
    );
};

export default UsersForm;