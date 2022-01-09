import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError } from "../../actions/MyQuestionsActions";
import axios from "axios";

export const loadAllQuestion=()=>(dispatch)=>{
  
    dispatch(questionsLoading())

    const options = {
    method: 'GET',
    url: 'http://localhost:8080/getAll',
    headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}


export const loadById=(id)=>(dispatch)=>{


    const options = {
        method: 'GET',
        url: `http://localhost:8080/get/${id}`,
        headers: {'Content-Type': 'application/json'}
        };
    
        axios.request(options).then(function (response) {
            dispatch(oneQuestionLoadSucces(response.data))
        }).catch(function (error) {
            dispatch(oneQuestionLoadError(error.message))
        });
}


export const postQuestion=(question)=>{

    const options = {
        method: 'POST',
        url: 'http://localhost:8080/create',
        headers: {'Content-Type': 'application/json'},
        data: question
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}


export const postAnswer=(answer)=>(dispatch) =>{

    const options = {
        method: 'POST',
        url: 'http://localhost:8080/add',
        headers: {'Content-Type': 'application/json'},
        data: answer
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(oneQuestionLoadSucces(response.data))
      }).catch(function (error) {
        console.error(error);
      });
}


export const deleteQuestion=(id)=>{
    const options = {method: 'DELETE', url: `http://localhost:8080/delete/${id}`};

        axios.request(options).then(function (response) {
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });
}


export const getUserQuestion=(userId)=>(dispatch)=>{

    dispatch(myQuestionsLoading())

    const options = {
        method: 'GET',
        url: `http://localhost:8080/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
      };
      axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
      }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
      });
}