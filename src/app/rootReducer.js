import { combineReducers } from "@reduxjs/toolkit";
import reducerQuestions from "../reducers/QuestionsReducer";
import OneQuestionReducer from "../reducers/OneQuestionReducer";
import reducerAuth from "../reducers/AuthReducer";
import myQuestionReducer from "../reducers/MyQuestionsReducer";
import myUserReducer from "../reducers/MyUserReducer";

const rootReducer=()=>{

    return combineReducers(
        {
        question:reducerQuestions,
        auth:reducerAuth,
        oneQuestion:OneQuestionReducer,
        myQuestion:myQuestionReducer,
        myUser: myUserReducer
        }
    )
}

export default rootReducer
