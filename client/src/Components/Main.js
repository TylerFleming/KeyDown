import { useReducer, createContext } from "react"
import { StyledWords } from "../ComponentStyles/Words.styles"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StyledHighscores } from "../ComponentStyles/Highscores.style"

export const gameContext = createContext()

function gameReducer(state, action) {
    switch (action.type) {
        case 'typed name':
            return {
                ...state, name: action.payload.name,
            }
            break;

        case 'typed word':
            return {
                ...state, wpm: Math.floor(state.keyCount / 5),
            }
            break;

        case 'sound muted':
            return {
                ...state, sounds: false,
            }
            break;

        case 'game start':
            return {
                ...state, gameStart: true,
            }


        case 'key pressed':
            return {
                ...state, keyCount: state.keyCount +1,
            }
            break;


        case 'show modal':
            return {
                ...state, showModal: true,
            }
            break;

        case 'reset':
            return {
                name: '',
                wpm: 0,
                keyCount: 0,
                sounds: true,
                gameStart: false,
                showModal: false,
                
            }
            break;


        default:
            return state
    }
}

const initialState = {
    name: '',
    wpm: 0,
    keyCount: 0,
    sounds: true,
    gameStart: false,
    showModal: false,
}

const Main = ({className}) => {

    const [ state, dispatch ] = useReducer(gameReducer, initialState)

    return (
        <section className={className}>
        <Switch>
        <Route exact path='/highscores'>
            <StyledHighscores />
        </Route>
        <gameContext.Provider value={{ state, dispatch }}>
            <StyledWords />
        </gameContext.Provider>
        </Switch>


        </section>
    )
}

export default Main
