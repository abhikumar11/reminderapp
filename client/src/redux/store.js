import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import reminderReducer from "./reducer";

const store =createStore(reminderReducer,{},applyMiddleware(thunk));
export default store;