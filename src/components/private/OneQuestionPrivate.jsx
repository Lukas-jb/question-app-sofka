import {Link} from "react-router-dom"
import ReactQuill from "react-quill";

const OneQuestionPrivate = ({oneQuestion}) => {

    return (
        <div className='question'>
            <b>
                <h2>Preguntas</h2>
            </b>
            <p>
                <span style={{color: "#510073"}}>
                <b>

                </b>
            </span>- {oneQuestion.category} -
                <small>{oneQuestion.type}
                </small>
            </p>
        </div>
    )
}
OneQuestionPrivate.modules = {toolbar: false}
export default OneQuestionPrivate