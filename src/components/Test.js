// Learn useReducer hook
import { useReducer } from "react"

const initialState = {
    cart: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { cart: state.cart + 1 }
        case 'decrease':
            return { cart: state.cart - 1 }
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
            <h3> {state.cart} </h3>
            <button onClick={() => dispatch({ type: "increase" })} > Decrease </button>
            <button onClick={() => dispatch({ type: 'reset' })} > Reset </button>
            <button onClick={() => dispatch({ type: 'decrease' })} > Increase </button>
        </>
    )
}

export default UseReducer                               