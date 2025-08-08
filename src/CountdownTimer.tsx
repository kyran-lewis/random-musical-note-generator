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

  // return <p>{secondsLeft < 0 ? "0" : secondsLeft}</p>;

  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {secondsLeft < 0 ? "0" : secondsLeft}
      </span>
    </div>
  );
}

export default CountdownTimer;
