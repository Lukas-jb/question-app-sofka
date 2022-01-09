import { useDispatch,useSelector } from "react-redux";
import { loadById } from '../../app/middleware/payloadQuestions';
import OneQuestionPublic from '../../components/public/OneQuestionPublic';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePublic = () => {
    const {id}=useParams();

    const dispatch = useDispatch()
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
      console.log(oneQuestion)
    },[])
  
    return (    
        <>
        <h2>Respuestas a esta pregunta</h2>
        {oneQuestion&&(
        <>
        <OneQuestionPublic question={oneQuestion}/>
        {oneQuestion.answers.map((answer,index)=>{
                return(
                    <ViewAnswer key={index} answer={answer} ></ViewAnswer>
                )})}
        </>
        )}
        </>
    )
}

export default OneQuestionPagePublic;
