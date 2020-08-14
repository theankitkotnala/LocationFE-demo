import API from './../constants/api_list';

export const fetchAllUsersWithinRange = async ({ lat, long , range },dispatch) => {
    fetch(API.fetchAllUsersWithinRage(lat, long, range))
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "FETCH_ALL_USERS_WITHIN_RANGE_SUCCESS",
                payload: {
                    users : res.users
                }
            })
        }).catch( err => {
            dispatch({
                type: "FETCH_ALL_USERS_WITHIN_RANGE_ERROR"
            })
        })
    
    
}