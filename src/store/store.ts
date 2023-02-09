// import {
//   applyMiddleware,
//   legacy_createStore as createStore,
//   compose,
// } from "redux";
// import { persistStore, persistReducer, PersistConfig } from "redux-persist";
// import storage from "redux-persist/lib/storage";
//import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

import { configureStore } from "@reduxjs/toolkit";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

export type RootState = ReturnType<typeof rootReducer>;

// type ExtendedPersistConfig = PersistConfig<RootState> & {
//   whitelist: (keyof RootState)[];
// };

// const persistConfig: ExtendedPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

//const middlewares = [thunk];

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const store = configureStore({
  reducer: rootReducer,
  //middleware: [...middlewares]
});

// export const persistor = persistStore(store);
