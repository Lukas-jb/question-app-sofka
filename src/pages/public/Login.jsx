import React from 'react'
import { useState } from 'react'
import { app } from '../../service/firebase';

export const Logueo = (props) => {

    const [ isRegistrando, setIsRegistrando ] = useState(false)

    const crearUsuario = (correo, contraseña) => {
        app.auth().createUserWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                console.log("usuario creado", usuarioFirebase)
                props.setUsuario(usuarioFirebase);
            });
    }

    const iniciarSesion = (correo, contraseña) => {
        app.auth().signInWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                props.setUsuario(usuarioFirebase);
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const contraseña = e.target.passwordField.value;

        if(isRegistrando){
            crearUsuario(correo, contraseña);
        }

        if(!isRegistrando){
            iniciarSesion(correo, contraseña);
        }
    }

    return (
        <div>
            <h1>{ isRegistrando ? "Regístrate" : "Iniciar Sesión" }</h1>
            <form onSubmit={submitHandler}>
                <input type="email" id="emailField" placeholder='Correo Electrónico'/>
                <input type="password" id="passwordField" placeholder='Contraseña' />
                <button type='submit'>
                    {isRegistrando ? "Regístrate" : "Iniciar sesión"}
                </button>
            </form>
            <button type='submit' onClick={() => setIsRegistrando(!isRegistrando) }>
                { isRegistrando
                    ? "¿Ya tienes cuenta? ¡Inicia sesión!"
                    : "¿No tienes cuenta? ¡Registrate, es gratis!"}
            </button>
        </div>
    )
}