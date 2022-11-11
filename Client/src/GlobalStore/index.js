import { combineReducers } from "redux"

import userData from "./reducrs/user"

const allReducers = combineReducers({
    userData,
})

export default allReducers