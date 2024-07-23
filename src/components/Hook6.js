// Learn useRef
import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("Component rerendered...!")
        console.log(inputRef)
    })
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return (
        <>
            <h2> Learn useRef </h2>
            <button onClick={handleClick} > Click me! </button>
            <input ref={inputRef} />
        </>
    )
}

export default UseRef                                                         


