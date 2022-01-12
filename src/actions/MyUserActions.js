import actionsTypesMyUser from "./actionsTypes/ActionsTypeMyUser";


export const myUserLoadSuccess=(user)=>{
    return {
        type:actionsTypesMyUser.LOAD_SUCCESS_USER,
        payload:user
    }
}

export const myUserLoadError=(error)=>{
    return {
        type:actionsTypesMyUser.LOAD_FAILURE_USER,
        payload:error
    }
}

export const myUserLoading=()=>{
    return {
        type:actionsTypesMyUser.LOADING_USER
    }
}