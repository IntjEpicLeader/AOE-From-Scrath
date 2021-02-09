import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";

import App from "./App";
import { rootReducer } from "./rootReducer";
import storeProvider from "./store";

const sagaMiddleWare = createSagaMiddleWare();

const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );

storeProvider.init(configureStore);
const store = storeProvider.getStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
// sagaMiddleWare.run(rootSaga);
