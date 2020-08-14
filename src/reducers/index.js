export const initialState = {
    users : []
}

const Reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_ALL_USERS_WITHIN_RANGE_SUCCESS" :
            return {
                ...state,
                users : action.payload.users
            }
        case "FETCH_ALL_USERS_WITHIN_RANGE_ERROR" : 
            return state;
        default: return state;
    }
}

export default Reducer;