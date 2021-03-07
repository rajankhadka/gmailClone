import { userTypes } from "./actionTypes";

export const login = (data) => {
    console.log("from action",data);
    return {
        type: userTypes.LOGINUSER,
        payload: data,
    }
}

export const logout = () => {
    return {
        type: userTypes.LOGOUTUSER
    }
}