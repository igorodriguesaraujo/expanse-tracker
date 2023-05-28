import { createContext, useEffect, useReducer, useState } from "react";

import globalReducer from "../store/reducer";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const initialState = localStorage.getItem("TRANSACTIONS")
    ? JSON.parse(localStorage.getItem("TRANSACTIONS"))
    : {
        transactions: [],
      };

  const [show, setShow] = useState(false);

  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    localStorage.setItem("TRANSACTIONS", JSON.stringify(state));
  }, [state]);

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  function removeTransaction(id) {
    dispatch({ type: "REMOVE_TRANSACTION", payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        show,
        setShow,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
