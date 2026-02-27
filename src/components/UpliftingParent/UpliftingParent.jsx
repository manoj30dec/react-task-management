import { useRef, useEffect, useState } from 'react';
import UpliftingChild from './UpliftingChild';
export default function UpliftingParent(props) {
  const [color, setColor] = useState("yellowgreen")
  const childRef = useRef();
  const toggleColor = () => {
    //setColor(color === "yellowgreen" ? "pink" : "yellowgreen");
    setColor(prev => prev === "yellowgreen" ? "pink" : "yellowgreen");
  }
  const handleClick = () => {
    childRef.current.changeColorInput();
  };

  return (
    <div>
      <h2>Example of useRef and forwardRef</h2>
      *****************************************************************************************************************
      <h2>I am Parent Component</h2>
      <h5 style={{ background: color }} className='p-2'>Change color</h5>
      <button onClick={handleClick}>Focus Child Input</button>
      <UpliftingChild toggleColor={toggleColor} ref={childRef} />

    </div>
  );
}
