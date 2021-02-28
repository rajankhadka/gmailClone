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
