import { useReducer } from "react"


function gameReducer(state, action) {
    switch (action.type) {
        case 'typed word':
            return {
                ...state, wpm: state.wpm +1,
            }


        default:
            return state
    }
}

const initialState = {
    name: '',
    wpm: 0,
    acurracy: 0,
    timer: 60,
    gameStart: false
}

const Main = ({className}) => {

    const [ state, dispatch ] = useReducer(gameReducer, initialState)

    return (
        <section className={className}>
            
        </section>
    )
}

export default Main
