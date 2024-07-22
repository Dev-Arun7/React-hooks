// Learn useReducer hook
import { useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increase':
            return state = state + 1
        case 'decrease':
            return state = state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1> Learn useReduce </h1>
            <h3> {state} </h3>
            <button onClick={() => dispatch('decrease')} > Decrease </button>
            <button onClick={() => dispatch('reset')} > Reset </button>
            <button onClick={() => dispatch('increase')} > Increase </button>
        </>
    )
}

export default UseReducer