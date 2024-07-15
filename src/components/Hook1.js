// Learn UseState 
import { useState } from 'react'

function Hook1() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1> UseState </h1>
            <h2> Count: {count} </h2>
            <button onClick={() => setCount(count + 1)} > Increament </button>
            <br />
            <br />
            <button onClick={() => setCount(count - 1)}> Decement </button>
        </>
    )
}

export default Hook1

