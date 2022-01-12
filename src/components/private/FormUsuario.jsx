import React, { useState } from 'react';
import { updateUser } from '../../app/middleware/payloadQuestions';
import useFormData from '../../hooks/UseFormData'
import swal from 'sweetalert2'
import { useDispatch, } from "react-redux"

const FormUsuario = ({ myUser, editProfile }) => {
    const dispatch = useDispatch()
    const [nombre, setNombre] = useState(myUser.nombre);
    const [apellido, setApellido] = useState(myUser.apellido);
    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        editProfile(false)
        dispatch(updateUser(formData))
        form.current.reset()
        swal({ title: "Actualizado", text: "Click en el botón Ok!", icon: "success" });
    }

    return (
        <div>
            <h1>Actualización de los datos personales</h1>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <input
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder='Ingrese Nombre'
                    className="form-control-lg mb-3"
                    required
                />
                <input
                    name="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder='Ingrese Apellido'
                    className="form-control-lg mb-3"
                />
                <input hidden name="id" type="text" defaultValue={myUser.id}></input>
                <input hidden name="uid" type="text" defaultValue={myUser.uid}></input>
                <input hidden name="path" type="text" defaultValue={myUser.path}></input>
                <button onClick={() => editProfile(false)} className="btn btn-danger" type="button">Cancelar</button>
                <button disabled={nombre === myUser.nombre && apellido === myUser.apellido} className="btn btn-dark" type="submit">Actualizar</button>
            </form>
        </div>
    )
}

export default FormUsuario;