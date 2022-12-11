import { combineReducers } from "redux"

import userData from "./reducrs/user"
import notificationData from "./reducrs/notifications"

const allReducers = combineReducers({
    userData,
    notificationData
})

export default allReducers