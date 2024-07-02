import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { I18nextProvider } from 'react-i18next';
import i18nConfig from './languages/i18n.config';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <I18nextProvider i18n={i18nConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
);
