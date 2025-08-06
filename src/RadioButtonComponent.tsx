function RadioButtonComponent({ noteSelection, setNoteSelection }: any) {
  return (
    <div>
      <input
        type="radio"
        name="noteSelection"
        value="all"
        checked={noteSelection === "all"}
        onChange={(e) => setNoteSelection(e.target.value)}
      />
      <label htmlFor="all">All Diatonic Notes</label>

      <input
        type="radio"
        name="noteSelection"
        value="onlyFlats"
        checked={noteSelection === "onlyFlats"}
        onChange={(e) => setNoteSelection(e.target.value)}
      />
      <label htmlFor="all">Only Flats</label>

      <input
        type="radio"
        name="noteSelection"
        value="onlySharps"
        checked={noteSelection === "onlySharps"}
        onChange={(e) => setNoteSelection(e.target.value)}
      />
      <label htmlFor="all">Only Sharps</label>

      <input
        type="radio"
        name="noteSelection"
        value="naturalNotes"
        checked={noteSelection === "naturalNotes"}
        onChange={(e) => setNoteSelection(e.target.value)}
      />
      <label htmlFor="all">Natural Notes Only</label>
    </div>
  );
}

export default RadioButtonComponent;
