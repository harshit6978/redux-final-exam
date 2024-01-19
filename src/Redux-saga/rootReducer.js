import { combineReducers } from "redux";
import productReducer from "./Admin/reducer/reducer";
const rootReducers = combineReducers({
    productReducer,
});

export default rootReducers;