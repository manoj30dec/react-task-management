import React from 'react'
import "./Loading.css"
const Loading = () => {
    return (
        <>
            <div className='loader-wrapper'>
                <div className="loader"></div>
                <div className='my-2'>
                    Loading...
                </div>
            </div>
        </>

    )
}

export default Loading