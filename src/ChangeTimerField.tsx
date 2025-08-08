import { useEffect } from "react";

function ChangeTimerField({
  secondsLeft,
  setSecondsLeft,
  paused,
  countdownLength,
  setCountdownLength,
}: any) {
  function handleOnChange(e: any) {
    setSecondsLeft(e.target.value);
    setCountdownLength(e.target.value);
  }

  return (
    <div className="change-timer">
      <input
        type="number"
        value={countdownLength}
        disabled={!paused}
        onChange={handleOnChange}
        min="1"
        max="20"
      />
      <span> seconds</span>
    </div>
  );
}

export default ChangeTimerField;
