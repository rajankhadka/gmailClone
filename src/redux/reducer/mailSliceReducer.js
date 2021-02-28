import {actionTypes} from "../action/actionTypes"

const initialState = {
    sendMessageIsOpen : false,
}

const mailSliceReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OpenSendMessage:
            return {
                ...state,
                sendMessageIsOpen: true
            }
        
        case actionTypes.CloseSendMessage:
            return {
                ...state,
                sendMessageIsOpen: false
            }
        default:
            return state
    }
}

export default mailSliceReducer;