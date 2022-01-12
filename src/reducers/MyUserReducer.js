import actionsTypesMyUser from "../actions/actionsTypes/ActionsTypeMyUser";

const initialState = {
    isLoading: false,
    myUser: null,
    error: null
}

const MyUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypesMyUser.LOAD_SUCCESS_USER:
            return {
                ...state,
                isLoading: false,
                myUser: payload,
                error: null
            }
        case actionsTypesMyUser.LOAD_FAILURE_USER:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case actionsTypesMyUser.LOADING_USER
            :
            return {
                ...state,
                isLoading: true,
                error: payload
            }
        default: return state;
    }
}

export default MyUserReducer