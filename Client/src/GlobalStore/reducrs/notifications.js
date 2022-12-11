const InitialState = []

const notificationData = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_NOTIFICATION":
            return state = action.data
            break;
        default:
            return state
            break;
    }

}

export default notificationData