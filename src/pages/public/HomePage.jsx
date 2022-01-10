import React, {useState} from 'react'
import {app, google} from "../../service/firebase";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {loginAction, loggedAction} from "../../actions/AuthorActions"
import {Outlet, useNavigate,} from "react-router-dom";
import PrivateLayout from "../../layout/PrivateLayout";
import {Login} from "./Login";


const HomePage = () => {


    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate()

    const handler = () => {
        app.auth().signInWithPopup(google)
            .then(user => {
                dispatch(loginAction(user.user.multiFactor.user.email,
                    user.user.multiFactor.user.displayName,
                    user.user.multiFactor.user.uid,
                    user.user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")
            })
            .catch()
    }

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(loggedAction(user.multiFactor.user.email,
                    user.multiFactor.user.displayName,
                    user.multiFactor.user.uid,
                    user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")
            }
        })
    }, [])

    useEffect(() => {
        app.auth().onAuthStateChanged((usuarioFirebase) => {
            setUsuario(usuarioFirebase);
        })
    }, []);


    return (
        <div>
            <div className="contenedor-2">

                <div>
                    <h3 className="contenerod-imput">Inicia sesíon para publicar</h3>
                    <h3>preguntas y respuestas</h3>
                </div>
                {usuario ? <PrivateLayout/> : <Login setUsuario={setUsuario}/>}


                <div className="espaciado-boton"></div>
                <button className="btn btn-primary  btn-lg active" role="button" onClick={handler}><img
                    src="/imgGoogle.png" height="30" width="30" style={{marginRight: "10px"}}/> Continuar con google
                </button>
            </  div>
        </div>
    )

}
export default HomePage
