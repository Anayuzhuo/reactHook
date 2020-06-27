import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import * as serviceWorker from "./serviceWorker";
import ContactsContext from "./context";
import reducer from "./reducer";

const App = () => {
  const initialState = useContext(ContactsContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ContactsContext.Provider value={{ state, dispatch }}>
        <Contact></Contact>
        <Contacts></Contacts>
      </ContactsContext.Provider>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
