// Learn useContext
import React, { useState, createContext } from "react";
import ContextB from "./ContextB";

export const UserContext = createContext()

function ContextA() {
    const [user, setUser] = useState("Arun")
    return (
        <>
            <h1> Learn useContext </h1>
            <h1> ContextA: {`Hello ${user}`} </h1>
            <UserContext.Provider value={user}>
                <ContextB />
            </UserContext.Provider>
        </>
    )
}

export default ContextA