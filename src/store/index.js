import { configureStore } from "@reduxjs/toolkit";
import chamasReducer from "./chamas-slice";

const store = configureStore({
    reducer : { chamas: chamasReducer}
});

export default store;