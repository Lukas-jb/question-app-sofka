import useFormData from '../../hooks/UseFormData'
import {postQuestion} from '../../app/middleware/payloadQuestions';
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import TextEditor from "../../hooks/TextEditor";


const FormQuestion = () => {
    const navigate = useNavigate()

    const state = useSelector(state => state.auth)
    const [ body, setBody ] = useState("");
    const {form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(form.current[1].value);
        const envioDatos = {
            userId: form.current[0].value,
            question: body,
            type: form.current[1].value,
            category: form.current[2].value
        }
        postQuestion(envioDatos, navigate)
    }

    return (
        <div>
            <h1>Crea una pregunta.</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label><b>Añadir nueva pregunta</b></label>

                <TextEditor body={body} setBody={setBody}/>
                <input required name="userId" hidden type="text" value={state.user.uid}
                       placeholder='Ingresa una pregunta'   ></input>

                <label className=" font-medium h5"><b>TIPO</b></label>
                <select className="formulario-Question" required  name="type" defaultValue="">

                    <option disabled type="String" value="">Seleccione una tipo de pregunta</option>
                    <option type="String">OPEN</option>
                    <option type="String">OPINION</option>
                    <option type="String">WITH_RESULT</option>
                    <option type="String">WITH_EVIDENCE</option>
                </select>
                <label className=" font-medium h5"><b>CATEGORIA</b></label>
                <select className="formulario-Question" required name="category" defaultValue="">

                    <option disabled type="" value="">Seleccione una categoria para la pregunra</option>
                    <option type="String">TECHNOLOGY_AND_COMPUTER</option>
                    <option type="String">SCIENCES</option>
                    <option type="String">SOFTWARE_DEVELOPMENT</option>
                    <option type="String">SOCIAL_SCIENCES</option>
                    <option type="String">LANGUAGE</option>
                </select>
                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}

export default FormQuestion