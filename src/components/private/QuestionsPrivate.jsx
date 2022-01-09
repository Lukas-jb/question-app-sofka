import {Link} from "react-router-dom"

const QuestionsPrivate = ({question}) => {

    return (
        <div className='question'>
            <p><span
                style={{color: "#000"}}> <b>{question.question}</b> </span> - {question.category} - <small>{question.type}</small>
            </p>

            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <div className="espaciado-boton">
                <Link to={`/private/question/${question.id}`} className="button">
                    Revisar Pregunta
                </Link>
            </div>
        </div>
    )
}

export default QuestionsPrivate