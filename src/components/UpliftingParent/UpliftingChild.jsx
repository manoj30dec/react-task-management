import { forwardRef, useImperativeHandle, useRef } from "react"
const UpliftingChild = forwardRef(({ toggleColor }, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        changeColorInput() {
            inputRef.current.style.backgroundColor = "yellowgreen";
        }
    }))

    return (
        <>
            <br />
            <hr /><br />
            <h2>I am Child Component</h2>
            <button onClick={toggleColor}>Call Parent Function</button>
            <br />
            <hr /><br />
            <input type="text" ref={inputRef} />
        </>
    )
})
export default UpliftingChild