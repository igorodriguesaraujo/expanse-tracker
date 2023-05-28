import React from "react";
import { GlobalProvider } from "./context/GlobalContext";

import Header from "./components/Header";
import ExpanseForm from "./components/ExpanseForm";
import ExpanseList from "./components/ExpanseList";
import Balance from "./components/Balance";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <ExpanseForm />
      <ExpanseList />
    </GlobalProvider>
  );
}

export default App;
