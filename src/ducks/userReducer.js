import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

//declaring an action type:
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

//action creator
export const requestUserData = () => {
    let data = axios.get('/auth/user-data')
    .then(res => res.data)
        return {
            type: REQUEST_USER_DATA,
            payload: data
        }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED': //"_FULFILLED" is promise-based syntax
            const { email, firstName, lastName } = action.payload.user //destructured
            return { email, firstName, lastName }
        default:
            return state
    }
}