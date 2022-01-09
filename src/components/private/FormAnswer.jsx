import useFormData from '../../hooks/UseFormData'
import {postAnswer} from '../../app/middleware/payloadQuestions';
import {useDispatch, useSelector} from 'react-redux';
import TextEditor from "../../hooks/TextEditor";
import {useState} from "react";

const FormAnswer = ({idQuestion}) => {

    const state = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [body, setBody] = useState("");

    const {form, formData, updateFormData} = useFormData();


    const submitForm = (e) => {
        e.preventDefault();
        const formData = {userId: state.user.uid, questionId: idQuestion, answer: body, position: 1}
        // postAnswer(formData);
        console.log(formData);
        dispatch(postAnswer(formData));
        setBody("");

    }

    return (

        <div>
            <form onSubmit={submitForm}>
                <label>Agrega una respuesta</label>
                <TextEditor body={body} setBody={setBody}/>
                {/*<input required name="answer" type="text" placeholder='Ingresa una nueva respuesta'></input>
                <input hidden name="userId" type="text" value={state.user.uid} ></input>
                <input hidden name="questionId" type="text" value={idQuestion} ></input>*/}
                <button className="button" type="submit">Enviar Respuesta</button>
                <h3 color="">Respuestas</h3>
            </form>
        </div>

    )

}

export default FormAnswer