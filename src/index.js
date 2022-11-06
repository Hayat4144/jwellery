import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PersistReducer from "./Context/reducer/All_My_Reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(PersistReducer);
let persistor = persistStore(store);

root.render(
  <div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </div>
);

