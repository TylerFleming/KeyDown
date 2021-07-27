import { useState, useEffect, createContext } from 'react'
import WordData from '../WordData'
import { StyledInputText } from "../ComponentStyles/InputText.style"

export const wordContext = createContext()

const Words = ({className}) => {


    const [ currentWord, setCurrentWord ] = useState('')

    
    const chooseRandomWord = () => {
        return WordData[Math.floor(Math.random() * 1000)]
    }

    const generateNewWord = () => {
        let newWord = chooseRandomWord()
        setCurrentWord(newWord)
    }

    useEffect(() => {
       let randomWord = chooseRandomWord()
       setCurrentWord(randomWord)
    }, [])


    return <>
            <div className={className}>
                { currentWord }
            </div>
            <wordContext.Provider value={{currentWord, generateNewWord}}>
                <StyledInputText />
            </wordContext.Provider>

           </>
}

export default Words
