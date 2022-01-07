

const OneQuestionPublic = ({question}) => {

    return(
        <div className='question'>
            <p>{question.category}  - <small>{question.type}</small></p>
        
        </div>
    )
}

export default OneQuestionPublic