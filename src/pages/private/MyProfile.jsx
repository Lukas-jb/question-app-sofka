import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormUsuario from '../../components/private/FormUsuario'
import { getUser } from "../../app/middleware/payloadQuestions"
import ViewUser from "../../components/private/ViewUser"

const MyProfile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { isLoading, myUser, error } = useSelector(state => state.myUser)
    const [edit, setEdit] = useState(false)

    const editProfile = (e) => {
        setEdit(e)
    }

    useEffect(() => {
        dispatch(getUser(user.uid));
    }, []);

    return (
        <Fragment>
            
            <div className="d-flex justify-content-center mt-3">
                {edit && <FormUsuario myUser={myUser} editProfile={editProfile} />}
                {myUser && !edit &&
                    <>
                        <ViewUser myUser={myUser} editProfile={editProfile} />
                    </>
                }
                {isLoading && <h1>Cargando...</h1>}
                {error && <h1>Error {error}</h1>}
            </div>
        </Fragment >
    )
}

export default MyProfile