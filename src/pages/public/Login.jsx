import React from 'react'
import {useState} from 'react'
import {app} from '../../service/firebase';
import { useDispatch } from "react-redux"
import { getUserValidation, postUser } from '../../app/middleware/payloadQuestions'

const imagenDePerfil = "https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/pngwing.com.png?alt=media&token=ae687cb3-1160-4aa6-909c-a4e320f0a1c6"

export const Login = (props) => {
    const dispatch = useDispatch()
    const [isRegistrando, setIsRegistrando] = useState(false)

    const crearUsuario = (correo, contraseña) => {
        app.auth().createUserWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                dispatch(postUser(
                    usuarioFirebase.user.email.split("@")[0],
                    usuarioFirebase.user.uid,
                    imagenDePerfil
                ))
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
                <div className="posicion-bnt">
                    <div className="espaciado-boton">
                        <button className="btn btn-success  btn-lg active" type='submit'>
                            {isRegistrando ? "Crear cuenta" : "Iniciar sesión"}
                        </button>
                    </div>

                    <div className="espaciado-boton">
                        <button className="btn-iniciosecion" type='submit'
                                onClick={() => setIsRegistrando(!isRegistrando)}>
                            {isRegistrando ? "¡Inicia sesión!" : "Crear cuenta"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
