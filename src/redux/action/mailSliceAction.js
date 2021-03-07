import { actionTypes } from './actionTypes';

export const openSendMessage = () => {
    return {
        type: actionTypes.OpenSendMessage,
    }
}

export const closeSendMessage = () => {
    return {
        type: actionTypes.CloseSendMessage,
    }
}

export const selectmailAction = (data) => {
    return {
        type: actionTypes.SELECTMAIL,
        payload : data
    }
}
