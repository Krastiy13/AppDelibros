import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices";
import thunk from 'redux-thunk';
const store = configureStore({
    reducer: {
        app: appReducer,
        middleware: [thunk]
    },
});

export default store;