import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
// import {Store} from "./Redux/Store"
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/i18nn/Translation/i18n";
import { Store } from "./Components/Redux/Store";

i18n.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <I18nextProvider i18n = {i18n}>
      <Suspense >
    <BrowserRouter>
    <Provider store = {Store}>
      <App />
    </Provider>

    </BrowserRouter>
    </Suspense>
    </I18nextProvider>
   
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
