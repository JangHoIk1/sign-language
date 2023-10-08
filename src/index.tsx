import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { auth } from "./firebase";
import AuthProvider from "./component/provider/authProvider";
console.log(auth);


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);