import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// // Import Combination of all Reducer
import rootReducer from "./rootReducer";
// // Import All Saga code
import { rootSaga } from "./Saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(  //
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))

)

sagaMiddleware.run(rootSaga);

export default store;