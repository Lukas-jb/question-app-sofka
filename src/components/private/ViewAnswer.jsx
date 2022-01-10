import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import {useSelector} from 'react-redux';

const ViewAnswer = ({answer, deleteAnswer}) => {

    const state = useSelector(state => state.auth)

    return (
        <div className='question'>
            <div>
                <ReactQuill className='quill-editor'
                            readOnly='true'
                            preserveWhitespace='false'
                            placeholder='Ingresa una pregunta / respuesta'
                            value={answer.answer}
                            modules={ViewAnswer.modules}

                />
                {console.log(answer.id,"daslkdjñdsfhadshfañldsfldkasfkadhsfhdfhasldfhadshfladsncadskjcnñdslc")}
            </div>
            <div className="eliminar-answer">
                {state.user.uid === answer.userId ? deleteAnswer && (
                    <button
                        className="btn btn-danger "
                        id={answer.id}
                        onClick={() => deleteAnswer(answer.id)}
                    >
                        Eliminar Respuesta
                    </button>
                ) : null}
            </div>
        </div>

    )
}

ViewAnswer.modules = {toolbar: false}

export default ViewAnswer