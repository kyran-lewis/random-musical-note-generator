import { useEffect } from "react";

function CountdownTimer({
  secondsLeft,
  setSecondsLeft,
  paused,
  countdownLength,
}: any) {
  useEffect(() => {
    if (!paused) {
      if (secondsLeft < -2) {
        setSecondsLeft(countdownLength);
      } else {
        const interval = setInterval(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    }
  });

  return <p>{secondsLeft < 0 ? "0" : secondsLeft}</p>;
}

export default CountdownTimer;
