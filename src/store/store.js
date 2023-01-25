import { legacy_createStore as createStore } from "redux";
//compose, applyMiddleware,
import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer);
