import { useReducer, createContext } from "react"
import { StyledWords } from "../ComponentStyles/Words.styles"


export const gameContext = createContext()

function gameReducer(state, action) {
    switch (action.type) {
        case 'typed word':
            return {
                ...state, wpm: state.keyCount / 5,
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

        case 'reset':
            return {
                initialState,
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
}

const Main = ({className}) => {

    const [ state, dispatch ] = useReducer(gameReducer, initialState)

    return (
        <section className={className}>
            <gameContext.Provider value={{ state, dispatch }}>
                <StyledWords />
            </gameContext.Provider>

        </section>
    )
}

export default Main
