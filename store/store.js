// import { applyMiddleware } from "redux";
// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers";

// // initial states here
// const initalState = {};

// // middleware
// const middleware = [thunk];

// // creating store
// export const store = configureStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// // assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);