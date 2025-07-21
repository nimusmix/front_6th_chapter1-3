import { useState } from "react";
import { shallowEquals } from "../equals";
import { useCallback } from "./useCallback";

export const useShallowState = <T>(initialValue: T | (() => T)) => {
  const [state, setState] = useState(initialValue);

  const setShallowState = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      if (shallowEquals(state, newValue)) {
        return;
      }
      setState(newValue);
    },
    [state],
  );

  return [state, setShallowState];
};
