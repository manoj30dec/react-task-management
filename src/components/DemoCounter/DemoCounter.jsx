import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/reducers/counterSlice";
const DemoCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1>Counter example using Redux</h1>
                <h2>Count: {count}</h2>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
                <button className="btn btn-primary ms-4" onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

export default DemoCounter