import { useContext, useState, useEffect, useRef } from "react"
import { wordContext } from './Words'
import { gameContext } from './Main'
import gameSound from '../Sounds/gamesound.wav'
import { StyledModal } from "../ComponentStyles/Modal.style"

const sound = new Audio(gameSound)

const InputText = ({className, cb}) => {

    
    const {currentWord, generateNewWord} = useContext(wordContext)

    const { state, dispatch } = useContext(gameContext)

    const [ currentInput, setCurrentInput ] = useState('')
    
    const [ count, setCount ] = useState(null)

    const [ showModal, setShowModal ] = useState(false)

    const stats = useRef(null)

    const checkCurrentInput = (e) => {
        startGame()
        addKeycount(e)
        console.log(state)
        let currentLetter = e.target.value
        let checkArray = [...currentLetter].join('')
        setCurrentInput(e.target.value)
        if ( checkArray === currentWord ) {
            generateNewWord()
            setCurrentInput('')
            state.sounds === true ? sound.play() : sound.muted = true
            dispatch({type: "typed word"})
        }
    }
    
    useEffect(() => {
            stats.current.style.visibility = "visible"

            if ( count >= 1 ) {
                countDown()
            } else {
                setShowModal(true)
                stats.current.style.visibility = "hidden"
            }
    }, [count])

    useEffect(() => {
        stats.current.style.visibility = "visible"
    }, [])

    const countDown = () => {
        setTimeout(() => {
            setCount(prevState => prevState - 1)
        }, 1000);
    }

    const addKeycount = () => {
        dispatch({type: "key pressed"})
    }

    const startGame = () => {
        if ( state.gameStart) {
            return
        }
        dispatch({type: "game start"})
        setCount(60)
    }

    return (
        <>
        <input className={className} onChange={(e) => checkCurrentInput(e)} value={currentInput} type="text" placeholder="Type to start"/>

        <div className="stats" ref={stats}>
            <span>wpm: {state.wpm}</span>
            <span>time: {count}</span>

        </div>

        { showModal && count === 0 ? <StyledModal show /> : null}

        {/* <StyledModal show />         */}
        </>
    )
}

export default InputText
