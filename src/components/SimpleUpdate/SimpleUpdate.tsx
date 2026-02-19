import React, { useCallback, useState } from "react"
import Child from "./Child";

const SimpleUpdate=()=>{
    const [update,  setUpdate] = useState("Simple Update")
    const updateState = ()=>{
        setUpdate("Updated simple state");
    }
    // const childHanlder=()=>{
    //     console.log("Button clicked in parent ")
    // }
    const childHanlder=useCallback(()=>{
        console.log("Button clicked in parent ")
    },[])
    return(
        <>
         <h1>{update}</h1>
         <button onClick={updateState}>Click Me</button>
         {/* <Child  /> */}
         <Child childHanlder={childHanlder}  />
        </>
       
    )
}
export default SimpleUpdate