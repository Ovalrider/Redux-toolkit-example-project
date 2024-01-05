import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
}); // createStore(counterReducer);



export default store;
// function counterReducer(state = initState, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "increase":
//       return {
//         ...state,
//         counter: state.counter + action.value,
//       };
//     case "decrement":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "showCounter":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// }
