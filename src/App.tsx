import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import RadioButtonComponent from "./RadioButtonComponent";
import CountdownTimer from "./CountdownTimer";
import ChangeTimerField from "./ChangeTimerField";

function App() {
  const ALL_DIATONIC_NOTES = [
    "A",
    "A#",
    "Bb",
    "B",
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
  ];
  const ONLY_SHARPS = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const ONLY_FLATS = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
  ];
  const NATURAL_NOTES = ["A", "B", "C", "D", "E", "F", "G"];

  const [currentNote, setCurrentNote] = useState("");
  const [noteSelection, setNoteSelection] = useState("all");

  const [countdownLength, setCountdownLength] = useState(5);

  const [secondsLeft, setSecondsLeft] = useState(countdownLength);
  const [paused, setPaused] = useState(false);

  async function changeNote() {
    if (noteSelection === "all") {
      setCurrentNote(
        ALL_DIATONIC_NOTES[
          Math.floor(Math.random() * ALL_DIATONIC_NOTES.length)
        ]
      );
    } else if (noteSelection === "onlySharps") {
      setCurrentNote(
        ONLY_SHARPS[Math.floor(Math.random() * ONLY_SHARPS.length)]
      );
    } else if (noteSelection === "onlyFlats") {
      setCurrentNote(ONLY_FLATS[Math.floor(Math.random() * ONLY_FLATS.length)]);
    } else {
      setCurrentNote(
        NATURAL_NOTES[Math.floor(Math.random() * NATURAL_NOTES.length)]
      );
    }
    setSecondsLeft(countdownLength);
  }

  useEffect(() => {
    changeNote();
  }, []);

  useEffect(() => {
    if (secondsLeft < -2) {
      changeNote();
    }
  }, [secondsLeft]);

  useEffect(() => {
    changeNote();
    setSecondsLeft(countdownLength);
  }, [noteSelection]);

  return (
    <div className="main">
      <h1 style={{ color: secondsLeft > 0 ? "black" : "red" }}>
        {currentNote}
      </h1>
      <button onClick={changeNote}>Change Note</button>
      <button onClick={(e) => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>

      <CountdownTimer
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        paused={paused}
        countdownLength={countdownLength}
      />
      <h2>Settings:</h2>
      <h4>Change Timer:</h4>
      <ChangeTimerField
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        paused={paused}
        countdownLength={countdownLength}
        setCountdownLength={setCountdownLength}
      />
      <h4>Select Notes:</h4>
      <RadioButtonComponent
        noteSelection={noteSelection}
        setNoteSelection={setNoteSelection}
      />
    </div>
  );
}

export default App;
