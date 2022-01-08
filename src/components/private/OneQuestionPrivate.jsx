import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='question'>
            <p> <span style={{color:"#000"}}> <b>{oneQuestion.question}</b> </span>- {oneQuestion.category}  - <small>{oneQuestion.type}</small></p>

            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        
        </div>
    )
}

export default OneQuestionPrivate