//INITIAL STATE WILL GET PASSED THROUGH REDUCER TO SET AN INITIAL STATE IN STORE
const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

//EXPORT DEFAULT REDUCER FUNCTION RETURNS A STATE OBJECT
//"state = initialState" sets initialState as the default for the state parameter
export default function reducer(state = initialState, action) {
    return state
}