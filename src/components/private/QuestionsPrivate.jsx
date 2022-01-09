import {Link} from "react-router-dom"
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import '../../index.css';

const QuestionsPrivate = ({question, deleteQuestion}) => {

    return (
        <div className='question'>
            <div className="Padre-preguntas">
                <span style={{color: "#510073"}}>
                    <b>{<ReactQuill className='quill-editor'
                                    readOnly='true'
                                    preserveWhitespace='false'
                                    value={question.question}
                                    modules={QuestionsPrivate.modules}/>}
                    </b>- {question.category} - <small>{question.type}</small>
                    <Link to={`/private/question/${question.id}`} className="button"> Revisar Pregunta </Link>

                </span>


            </div>

            <div className="espaciado-boton">

                <div>{deleteQuestion && (
                    <button className="button-right"
                            id={question.id}
                            onClick={() => deleteQuestion(question.id)}
                    >DELETE</button>)}
                </div>
            </div>
        </div>
    )
}

QuestionsPrivate.modules = {toolbar: false}
export default QuestionsPrivate