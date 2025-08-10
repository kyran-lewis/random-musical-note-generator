import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import DropdownMenu from "./DropdownMenu";
import CountdownTimer from "./CountdownTimer";
import ChangeTimerField from "./ChangeTimerField";
import Ab from "./assets/bass-sound-pack/Ab1.mp3";
import A from "./assets/bass-sound-pack/A1.mp3";
import Bb from "./assets/bass-sound-pack/Bb1.mp3";
import B from "./assets/bass-sound-pack/B1.mp3";
import C from "./assets/bass-sound-pack/C2.mp3";
import Db from "./assets/bass-sound-pack/Db2.mp3";
import D from "./assets/bass-sound-pack/D2.mp3";
import Eb from "./assets/bass-sound-pack/Eb2.mp3";
import E from "./assets/bass-sound-pack/E1.mp3";
import F from "./assets/bass-sound-pack/F1.mp3";
import Gb from "./assets/bass-sound-pack/Gb1.mp3";
import G from "./assets/bass-sound-pack/G1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";
// import Ab1 from "./assets/bass-sound-pack/Ab1.mp3";

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

  const ALL_DIATONIC_NOTES_AUDIO = [
    A,
    Bb,
    Bb,
    B,
    C,
    Db,
    Db,
    D,
    Eb,
    Eb,
    E,
    F,
    Gb,
    Gb,
    G,
    Ab,
    Ab,
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
  const ONLY_SHARPS_AUDIO = [A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab];

  const ONLY_FLATS = [
    "Ab",
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
  ];
  const ONLY_FLATS_AUDIO = [Ab, A, Bb, B, C, Db, D, Eb, E, F, Gb, G];

  const NATURAL_NOTES = ["A", "B", "C", "D", "E", "F", "G"];
  const NATURAL_NOTES_AUDIO = [A, B, C, D, E, F, G];

  const [currentNote, setCurrentNote] = useState("");
  const [noteSelection, setNoteSelection] = useState("all");

  const [countdownLength, setCountdownLength] = useState(5);

  const [secondsLeft, setSecondsLeft] = useState(countdownLength);
  const [paused, setPaused] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

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

  useEffect(() => {
    if (soundOn && secondsLeft == 0) {
      let noteToPlay = A;
      // TODO: Diatonic notes will be more difficult as sharps and flats will have the same audio file but the array is longer
      if (noteSelection == "all") {
        noteToPlay =
          ALL_DIATONIC_NOTES_AUDIO[ALL_DIATONIC_NOTES.indexOf(currentNote)];
        console.log(noteToPlay);
      } else if (noteSelection == "onlySharps") {
        noteToPlay = ONLY_SHARPS_AUDIO[ONLY_SHARPS.indexOf(currentNote)];
      } else if (noteSelection == "onlyFlats") {
        noteToPlay = ONLY_FLATS_AUDIO[ONLY_FLATS.indexOf(currentNote)];
      } else {
        noteToPlay = NATURAL_NOTES_AUDIO[NATURAL_NOTES.indexOf(currentNote)];
      }
      const audio = new Audio(noteToPlay);
      audio.volume = 1;
      audio.play();
    }
  }, [secondsLeft]);

  return (
    <div className="main">
      <CountdownTimer
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        paused={paused}
        setPaused={setPaused}
        countdownLength={countdownLength}
      />
      <h1 style={{ color: secondsLeft > 0 ? "black" : "red" }}>
        {currentNote}
      </h1>
      <button onClick={changeNote}>Change Note</button>
      {/* <button onClick={(e) => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button> */}
      {/* <button onClick={(e) => setSoundOn(!soundOn)}>
        {soundOn ? "Turn Sound Off" : "Turn Sound On"}
      </button> */}
      <h2>Settings:</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>Change Timer:</h4>
        <ChangeTimerField
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
          paused={paused}
          countdownLength={countdownLength}
          setCountdownLength={setCountdownLength}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>Select Notes:</h4>
        <DropdownMenu
          noteSelection={noteSelection}
          setNoteSelection={setNoteSelection}
        />
      </div>
    </div>
  );
}

export default App;
