import { userTypes } from "../action/actionTypes";

const initialState = {
    user: null
}

const userSliceReducers = (state = initialState, action) => {
    console.log("reducers" , action.payload)
    switch (action.type) {
        case userTypes.LOGINUSER:
            return {
                ...state,
                user: action.payload
            }
        
        case userTypes.LOGOUTUSER:
            return {
                ...state,
                user: null
            }
    
        default:
            return state
    }
}

export default userSliceReducers;