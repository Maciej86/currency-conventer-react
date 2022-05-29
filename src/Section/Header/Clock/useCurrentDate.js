import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [currentDate, setCurrentDayAndTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDayAndTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentDate;
};
