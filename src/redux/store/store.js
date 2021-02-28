import { createStore,combineReducers } from "redux";

import mailSliceReducer from "../reducer/mailSliceReducer";


const rootReducers = combineReducers({
    mailSlice: mailSliceReducer
});

const configureStore = () => createStore(rootReducers);

export default configureStore;

