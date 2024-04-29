import { createStore } from "redux";
import MainReducers from "./redux/Reducers/MainReducers";

const Store = createStore(MainReducers)

export default Store