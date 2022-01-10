import {Link} from "react-router-dom"
import ReactQuill from "react-quill";

const OneQuestionPrivate = ({oneQuestion}) => {

    return (
        <div className='question'>
            <b><h2>Preguntas</h2></b>
            <p> <span style={{color: "#510073"}}>
                <b>
                    {<ReactQuill className='quill-editor'
                                 readOnly='true'
                                 preserveWhitespace='false'
                                 value={oneQuestion.question}
                                 modules={OneQuestionPrivate.modules}/>}
                </b>
            </span>- {oneQuestion.category} -
                <small>{oneQuestion.type}</small></p>


            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}

        </div>
    )
}
OneQuestionPrivate.modules = {toolbar: false}
export default OneQuestionPrivate