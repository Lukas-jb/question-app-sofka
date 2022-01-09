
const ViewAnswer = ({answer}) => {  

    return(
        <div className='question'>

            <p>{answer.answer} - <small>{answer.position}</small></p>
        
        </div>
    )
}

export default ViewAnswer