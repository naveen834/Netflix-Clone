import "normalize.css";

import React from "react";
import { render } from "react-dom";

import App from "./app";
import { FirebaseContext } from "./context/firebase";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";

console.log(process.env);
render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
