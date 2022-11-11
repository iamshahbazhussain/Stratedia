const InitialState = null

const userData = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_USER_DATA":
            return state = action.data
            break;
        default:
            return state
            break;
    }

}

export default userData