import { useState } from "react";
import useAddition from "../useAddition";

const DemoCustomHook = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const total = useAddition(num1, num2);

    return (
        <div>
            <label htmlFor="inputone" className="mx-2">
                Input First
                <input
                    id="inputone"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </label>
            <label htmlFor="inputtwo" className="mx-2">
                Input two
                <input
                    id="inputtwo"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </label>
            <br /><br />
            <h2>Sum: {total}</h2>
        </div>
    );
};

export default DemoCustomHook;