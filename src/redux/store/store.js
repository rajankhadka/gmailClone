import { createStore,combineReducers } from "redux";

import mailSliceReducer from "../reducer/mailSliceReducer";
import userSliceReducers from "../reducer/userSliceReducers";

const rootReducers = combineReducers({
    mailSlice: mailSliceReducer,
    userSliceReducers: userSliceReducers,
});

const configureStore = () => createStore(rootReducers);

export default configureStore;

