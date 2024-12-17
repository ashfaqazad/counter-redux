import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";



export const Counter = () => {
    const count = useSelector((state) => state.Counter.count);
    const dispatch = useDispatch()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}






// // src/Counter.js
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './features/counterSlice';

// const Counter = () => {
//   const count = useSelector((state) => state.counter.count); // State se count ko access karein
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(reset())}>Reset</button>
//     </div>
//   );
// };

// export default Counter;
