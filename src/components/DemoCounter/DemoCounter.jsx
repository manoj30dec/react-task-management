import React, { useState } from 'react'

const DemoCounter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <h1>{counter}</h1>
            <button className='btn btn-primary' onClick={() => setCounter(counter + 1)} >Click</button>
        </>
    )
}

export default DemoCounter