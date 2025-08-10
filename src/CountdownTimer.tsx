import { useEffect, useState } from "react";
import PauseIcon from "./assets/pause.svg";

function CountdownTimer({
  secondsLeft,
  setSecondsLeft,
  paused,
  setPaused,
  countdownLength,
}: any) {
  const FULL_DASH_ARRAY = 283;
  const [circleDashArray, setCircleDashArray] = useState("283");

  useEffect(() => {
    if (!paused) {
      calculateCircleDashArray();

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

  function calculateTimeFraction() {
    const rawTimeFraction = secondsLeft / countdownLength;
    return rawTimeFraction - (1 / countdownLength) * (1 - rawTimeFraction);
  }

  // Update the dasharray value as time passes, starting with 283
  function calculateCircleDashArray() {
    setCircleDashArray(
      `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`
    );

    // setCircleDashArray(`0 283`);

    // document
    //   .getElementById("base-timer-path-remaining")
    //   .setAttribute("stroke-dasharray", circleDasharray);
  }

  // return <p>{secondsLeft < 0 ? "0" : secondsLeft}</p>;

  const remainingPathColor = "green";

  return (
    <div className="base-timer" onClick={() => setPaused(!paused)}>
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
        <path
          id="base-timer-path-remaining"
          style={{
            strokeDasharray: circleDashArray,
            opacity: secondsLeft > 0 ? "100" : "0",
          }}
          className={`base-timer__path-remaining ${remainingPathColor}`}
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
        ></path>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {paused ? (
          <img width={"25px"} height={"25px"} src={PauseIcon} />
        ) : secondsLeft < 0 ? (
          "0"
        ) : (
          secondsLeft
        )}
      </span>
    </div>
  );
}

export default CountdownTimer;
