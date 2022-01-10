import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import {useSelector} from 'react-redux';

const ViewAnswer = ({answer, deleteAnswer}) => {

    const state = useSelector(state => state.auth)

    return (
        <div className='question'>

            <ReactQuill className='quill-editor'
                        readOnly='true'
                        preserveWhitespace='false'
                        placeholder='Ingresa una pregunta / respuesta'
                        value={answer.answer}
                        modules={ViewAnswer.modules}
            />
                <div className="col-1">
                {deleteAnswer && (

                    <button
                        className="btn-danger"
                        id={answer.id}
                        onClick={() => deleteAnswer(answer.id)}>
                        Eliminar Respuesta
                    </button>
                )}
                {console.log(answer.id, "id")}
            </div>
        </div>

    )
}

ViewAnswer.modules = {toolbar: false}

export default ViewAnswer