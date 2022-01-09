import React from 'react'
import {useState} from 'react'
import {app} from '../../service/firebase';

export const Login = (props) => {

    const [isRegistrando, setIsRegistrando] = useState(false)

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

        if (isRegistrando) {
            crearUsuario(correo, contraseña);
        }

        if (!isRegistrando) {
            iniciarSesion(correo, contraseña);
        }
    }

    return (
        <div>
            {/*<h2>{isRegistrando ? "Regístrate" : "Iniciar Sesión"}</h2>*/}
            <form onSubmit={submitHandler}>
                <div className="contenerod-imput">
                    <input className="formulario " type="email" id="emailField" placeholder='Correo Electrónico'/>
                </div>
                <input className="formulario " type="password" id="passwordField" placeholder='Contraseña'/>
                <div className="espaciado-boton">
                    <button className="btn btn-success  btn-lg active" type='submit'>
                        {isRegistrando ? "Crear cuenta" : "Iniciar sesión"}
                    </button>
                </div>
            </form>
            <div className="espaciado-boton">
                <button className="btn btn-success  btn-lg active" type='submit'
                        onClick={() => setIsRegistrando(!isRegistrando)}>
                    {isRegistrando ? "¡Inicia sesión!" : "Crear cuenta"}
                </button>
            </div>
        </div>
    )
}
