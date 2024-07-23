

// Learn useMemo
import React, { useState, useMemo } from "react"


function Test() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)


    // Function to increment counterOne
    const incrementOne = () => {


        setCounterOne(counterOne + 1)
    }


    // Function to increment counterTw0
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    const isEven = useMemo(() => {
        let i = 0
        // This while loop add some delay
        while (i < 1000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <>
            <h1> Learn useMemo </h1>
            <button onClick={() => { incrementOne() }}> {`Counter: ${counterOne} `}</button>
            <span> {isEven ? 'Even' : 'Odd'}</span>
            <br />
            <button onClick={incrementTwo}> {`Counter: ${counterTwo}`} </button>
        </>
    )
}


export default Test
