import {actionTypes} from "../action/actionTypes"

const initialState = {
    sendMessageIsOpen: false,
    selectmailReducer: null,
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
        
        case actionTypes.SELECTMAIL:
            return {
                ...state,
                selectmailReducer : action.payload
            }
        
        default:
            return state
    }
}

export default mailSliceReducer;