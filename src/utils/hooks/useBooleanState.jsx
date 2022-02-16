import { useState } from "react";

export const useBooleanState = (initialState = false) => {
  const [booleanVar, setBooleanVar] = useState(initialState);
  const setTrue = () => setBooleanVar(true);
  const setFalse = () => setBooleanVar(false);
  const toggle = () => setBooleanVar(!booleanVar);
  const setter = (boolValue) => setBooleanVar(boolValue);
  return [booleanVar, toggle, setTrue, setFalse, setter];
};
