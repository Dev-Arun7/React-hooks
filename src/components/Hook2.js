// export default Hook2
import { useEffect, useState } from "react"

function Hook2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Count is: ', count)

        // Return is optional
        return () => {
            console.log('Returning')
        }
    }, [count])
    return (
        <>
            <h1> Learn useEffect </h1>
            <h2> Count: {count} </h2>
            <button onClick={() => { setCount(count + 1) }}> Increament </button>
            <br />
            <br />
            <button onClick={() => setCount(count - 1)}> Decrement </button>
        </>
    )

}

export default Hook2