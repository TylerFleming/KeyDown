import { useState, useContext, useRef } from "react"
import { StyledButton } from "../ComponentStyles/Button.style"
import { gameContext } from './Main'
import { modalState } from './InputText'




const Modal = ({className, show}) => {
    const { stats, currentInput, setCurrentInput, generateNewWord } = useContext(modalState)

    const [ status, setStatus ] = useState('Name')

    const [ name, setName ] = useState('')

    const [ hideInputSubmitBtn, setHideInputSubmitBtn ] = useState(false)

    const { state, dispatch } = useContext(gameContext)

    const nameInput = useRef(null)

    const setStateName = async () => {

        setStatus('Submitting highscore...')
         dispatch({type: "typed name", payload: {name: name} })
         const { wpm } = state
         const hsData = {
             user: name,
             wpm: wpm,
         }
         const submitHS = await fetch('/submitHS', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hsData)
         })
         console.log(submitHS)
         const success = await submitHS.json()
        setStatus(success.message)
        setHideInputSubmitBtn(true)


    }
    

    const restart = () => {
        setCurrentInput('')
        generateNewWord()
        dispatch({type: 'reset'})
        stats.current.style.visibility = "visible"
        setHideInputSubmitBtn(false)

    }



    return (
        <div className={className}>
            <div className="modal-container">
                <div className="name">
                    <h2>{status}</h2>
                     { hideInputSubmitBtn ? null : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />}
                     { hideInputSubmitBtn ? null : <StyledButton cb={() => setStateName() } primary> Submit Highscore </StyledButton>}
                     <StyledButton cb={() => restart()}> Retry </StyledButton>
                </div>
            </div>
        </div>
    )
}

export default Modal
