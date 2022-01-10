import useFormData from '../../hooks/UseFormData'
import {postAnswer} from '../../app/middleware/payloadQuestions';
import {useDispatch, useSelector} from 'react-redux';
import TextEditor from "../../hooks/TextEditor";
import {useState} from "react";

const FormAnswer = ({idQuestion}) => {

    const state = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [body, setBody] = useState("");

    const {updateFormData} = useFormData();


    const submitForm = (e) => {
        e.preventDefault();
        const formData = {userId: state.user.uid, questionId: idQuestion, answer: body, position: 1}
        console.log(formData);
        dispatch(postAnswer(formData));
        setBody("");

    }

    return (

        <div>
            <form onSubmit={submitForm} onChange={updateFormData}>
                <label><h2>Agrega una respuesta</h2></label>
                <TextEditor body={body} setBody={setBody}/>
                <button className="button" type="submit">Enviar Respuesta</button>
                <h3 color="">Respuestas a esta pregunta</h3>
            </form>
        </div>

    )

}

export default FormAnswer