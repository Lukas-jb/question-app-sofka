import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {loadAllQuestion} from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';


const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading, questions, error} = useSelector(state => state.question)


    useEffect(() => {
        dispatch(loadAllQuestion())
    }, [])

    const [filtro, setFiltro] = useState("");

    return (
        <div className="contenedor-2">
            <input
                className="form-control "
                placeholder="Buscar preguntas"
                type="text"
                onChange={e => setFiltro(e.target.value.toUpperCase())}
            />

            <h1>private</h1>
            {error && <h1>{error}</h1>}
            {questions && questions.filter(busqueda => busqueda.category.includes(filtro) || busqueda.type.includes(filtro)).map((question) => {
                return (
                    <QuestionPrivate key={question.id} question={question}/>
                )

            })}
        </div>
    )
}

export default QuestionsPagePrivate
