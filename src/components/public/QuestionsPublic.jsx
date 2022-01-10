import {Link} from "react-router-dom"
import ReactQuill from "react-quill";

const QuestionsPublic = ({question}) => {

    return (
        <div className='question'>
            <p>
                <span style={{color: "#510073FF"}}>
                <b>{<ReactQuill className='quill-editor'
                    readOnly='true'
                    preserveWhitespace='false'
                    value={question.question}
                    modules={QuestionsPublic.modules}/>}</b>
            </span>- {question.category}
                - <small>{question.type}</small></p>


            <Link to={`/question/${question.id}`} className="button">
                Revisar Pregunta
            </Link>

        </div>
    )
}

export default QuestionsPublic