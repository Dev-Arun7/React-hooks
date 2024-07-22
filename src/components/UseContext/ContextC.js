// learn useContext, import and use in this component
import React, {useContext} from 'react'
import { UserContext } from './ContextA'

function ContextC() {
    const user = useContext(UserContext)
    return (
        <>
            <h3> ContextC: {` Bye: ${user}`}</h3>
        </>
    )
}

export default ContextC