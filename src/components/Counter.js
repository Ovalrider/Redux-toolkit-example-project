import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { counterActions } from "../store/counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch();
  function toggleCounterHandler() {
    dispatch(counterActions.showCounter());
  }
  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  function increaseHandler() {
    dispatch(counterActions.increase(5)); // {type: "unique", payload: 5}
  }

  const counterHtml = (
    <>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </>
  );
  return (
    <main className={classes.counter}>
      {showCounter? counterHtml : null}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
export default Counter;

// class Counter extends React.Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//           <button onClick={this.decrementHandler.bind(this)}>+5</button>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
