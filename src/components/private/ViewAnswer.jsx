import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';

const ViewAnswer = ({answer}) => {

    return(
        <div className='question'>

            <ReactQuill className='quill-editor'
                        readOnly='true'
                        preserveWhitespace='false'
                        placeholder='Ingresa una pregunta / respuesta'
                        value={answer.answer}
                        modules={ViewAnswer.modules}
            />

        </div>
    )
}

ViewAnswer.modules = {
    toolbar: false
};

export default ViewAnswer