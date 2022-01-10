import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getUserQuestion, deleteQuestion} from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"

const MyQuestions = (ii) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)
    const {
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)

    useEffect(() => {
        dispatch(getUserQuestion(user.uid));
        console.log(myQuestions)
    }, [])

    const sweetAlert = (id) => {
        const Swal = require('sweetalert2')
        Swal.fire({
            title: '¿Esta deguro?',
            text: "El registro se perdera permanentamente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteQuestion(id, myQuestions))
                Swal.fire(
                    '¡Eliminado!',
                    'Registro eliminado con exito',
                    'success'
                )
            }
        })
    }


    return (
        <div className="contenedor-2">
            <b>
                <h2>
                    Mis Preguntas
                </h2>
            </b>
            {myQuestions && myQuestions.map((question) => {
                return (
                    <QuestionsPrivate key={question.id} question={question} deleteQuestion={sweetAlert}/>
                )
            })}
            {error && <h1> Error {error} </h1>}

        </div>
    )
}

export default MyQuestions
