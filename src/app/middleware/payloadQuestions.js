import {questionsLoading, questionsLoadSucces, questionsLoadError} from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError, oneQuestionsLoading, oneQuestionsDeleteAnswer} from "../../actions/OneQuestionActions";
import {myQuestionsLoadSucces, myQuestionsLoading, myQuestionsLoadError } from "../../actions/MyQuestionsActions";
import axios from "axios";
import CreateQuestion from "../../pages/private/CreateQuestion";
import { myUserLoadSuccess, myUserLoading, myUserLoadError } from "../../actions/MyUserActions";
import { loginAction } from "../../actions/AuthorActions";

const URL = "https://floating-ravine-09712.herokuapp.com";

export const loadAllQuestion = () => (dispatch) => {

    dispatch(questionsLoading())

    const options = {
        method: 'GET',
        url: `${URL}/getAll`,
        headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}

export const loadById = (id) => (dispatch) => {

    const options = {
        method: 'GET',
        url: `${URL}/get/${id}`,
        headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(oneQuestionLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(oneQuestionLoadError(error.message))
    });
}


export const postQuestion = (question, navigate) => {

    const options = {
        method: 'POST',
        url: `${URL}/create`,
        headers: {'Content-Type': 'application/json'},
        data: question
    };

    axios.request(options).then(function (response) {
        navigate("/private/QuestionsPage")
    }).catch(function (error) {
        console.error(error);
    });
}


export const postAnswer = (answer) => (dispatch) => {

    const options = {
        method: 'POST',
        url: `${URL}/answer/add`,
        headers: {'Content-Type': 'application/json'},
        data: answer
    };

    axios.request(options).then(function (response) {
        console.log(response.data, "Data del answer");
        dispatch(oneQuestionLoadSucces(response.data, "response.data"))
    }).catch(function (error) {
        console.error(error);
    });
}


export const deleteQuestion = (id, myQuestions) => (dispatch) => {
    const options = {method: 'DELETE', url: `${URL}/delete/${id}`};

    axios.request(options).then(function (response) {
        const deleteOneQuestion = myQuestions.filter(questions => questions.id !== id)
        dispatch(myQuestionsLoadSucces(deleteOneQuestion))
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export const deleteAnswer = (id) => (dispatch) => {
    dispatch(oneQuestionsLoading())
    const options = {
        method: 'DELETE',
        url: `${URL}/answer/delete/${id}`
    };

    axios.request(options).then(function (response) {
        console.log(id, "antes id")
        dispatch(oneQuestionsDeleteAnswer(id))
        console.log(id, "despues id")
    }).catch(function (error) {
        dispatch(oneQuestionLoadError(error.message))
    });
}

export const getUserQuestion = (userId) => (dispatch) => {

    dispatch(myQuestionsLoading())

    const options = {
        method: 'GET',
        url: `${URL}/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
    };
    axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
    }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
    });
}

export const postUser = (nombre, uid, path) => async (dispatch) => {

    const options = {
      method: 'POST',
      url: `${URL}/createUsuario`,
      headers: { 'Content-Type': 'application/json' },
      data: { uid: uid, nombre: nombre, apellido: "", path: path }
    };
  
    await axios.request(options).then(function (response) {
      console.log("Usuario creado");
    }).catch(function (error) {
      console.error(error);
    });
  }

export const getUserValidation = (user, navigate) => (dispatch) => {
    const options = {
      method: 'GET',
      url: `${URL}/getUsuario/${user.uid}`,
      headers: { 'Content-Type': 'application/json' },
    };
  
    axios.request(options).then(function (response) {
      dispatch(loginAction(user.email, user.displayName, user.uid, user.photoURL));
      navigate("/private/QuestionsPage")
    }).catch(function (error) {
      dispatch(postUser(user.displayName, user.uid, user.path));
      navigate("/private/QuestionsPage")
    });
  }
  
  export const getUser = (uid) => (dispatch) => {
    dispatch(myUserLoading())
  
    const options = {
      method: 'GET',
      url: `${URL}/getUsuario/${uid}`,
      headers: { 'Content-Type': 'application/json' },
    };
  
    axios.request(options).then(function (response) {
      dispatch(myUserLoadSuccess(response.data));
    }).catch(function (error) {
      dispatch(myUserLoadError(error.message));
      console.error(error);
    });
  }
  
  export const updateUser = (user) => async (dispatch) => {
  
    const options = {
      method: 'PUT',
      url: `${URL}/actualizarUsuario`,
      headers: { 'Content-Type': 'application/json' },
      data: user
    };
  
    await axios.request(options).then(function (response) {
      dispatch(getUser(user.uid));
      console.log("Usuario actualizado");
      dispatch(myUserLoadSuccess(response.data));
    }).catch(function (error) {
      console.error(error);
    });
}