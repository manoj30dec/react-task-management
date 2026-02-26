import React from "react";

const Child = ({ childHanlder }) => {
  console.log("Child rerender");
  return (
    <>
      <h1>Hi I am child component</h1>
      {/* <button >Counter</button> */}
      <button onClick={childHanlder}>Click from child</button>
    </>
  );
};
export default React.memo(Child);
