import { createStore } from "redux";

import allReducers from "./GlobalStore/index";

const GlobalState = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default GlobalState;