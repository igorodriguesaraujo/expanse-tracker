import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function useGlobalState() {
  const data = useContext(GlobalContext);
  return data;
}
