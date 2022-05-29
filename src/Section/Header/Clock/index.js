import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (currentDate) => {
  return (
    <time>
      {currentDate.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
      })}
      , {currentDate.toLocaleTimeString()}
    </time>
  );
};

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>Dzisiaj jest {formatDate(date)}</StyledClock>;
};

export default Clock;
