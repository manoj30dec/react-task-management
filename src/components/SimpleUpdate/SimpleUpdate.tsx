import React, { useCallback, useState } from "react";
import Child from "./Child";

const SimpleUpdate = () => {
  const [update, setUpdate] = useState("Simple Update In parent component");
  const updateState = () => {
    setUpdate("Updated simple state");
  };
  // const childHanlder=()=>{
  //     console.log("Button clicked in parent ")
  // }
  const childHanlder = useCallback(() => {
    console.log("Button clicked in parent ");
  }, []);
  return (
    <>
      <h1>{update}</h1>
      <button onClick={updateState}>Click Me</button>
      <p style={{ color: "red" }}>
        This button will update state in parent but in that case child component
        will not re-render. Open developer tool and check console.
      </p>
      <hr />
      <hr />
      <br />
      <h1>Following content is rendering from child component</h1>
      <Child childHanlder={childHanlder} />
    </>
  );
};
export default SimpleUpdate;
