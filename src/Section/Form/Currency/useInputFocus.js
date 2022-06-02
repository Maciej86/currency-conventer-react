import { useEffect, useRef } from "react";

export const useInputFocus = (focusInput) => {
  const inputFocus = useRef(null);
  useEffect(() => {
    if (focusInput) {
      inputFocus.current.focus();
    }
  }, [focusInput]);

  return { inputFocus };
};
