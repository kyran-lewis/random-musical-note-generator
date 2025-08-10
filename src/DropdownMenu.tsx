function DropdownMenu({ noteSelection, setNoteSelection }: any) {
  return (
    <select onChange={(e) => setNoteSelection(e.target.value)}>
      <option value="all">All Diatonic Notes</option>
      <option value="onlyFlats">Only Flats</option>
      <option value="onlySharps">Only Sharps</option>
      <option value="naturalNotes">Natural Notes Only</option>
    </select>
    // <div>
    //   <input
    //     type="radio"
    //     name="noteSelection"
    //     value="all"
    //     checked={noteSelection === "all"}
    //     onChange={(e) => setNoteSelection(e.target.value)}
    //   />
    //   <label htmlFor="all">All Diatonic Notes</label>

    //   <input
    //     type="radio"
    //     name="noteSelection"
    //     value="onlyFlats"
    //     checked={noteSelection === "onlyFlats"}
    //     onChange={(e) => setNoteSelection(e.target.value)}
    //   />
    //   <label htmlFor="all">Only Flats</label>

    //   <input
    //     type="radio"
    //     name="noteSelection"
    //     value="onlySharps"
    //     checked={noteSelection === "onlySharps"}
    //     onChange={(e) => setNoteSelection(e.target.value)}
    //   />
    //   <label htmlFor="all">Only Sharps</label>

    //   <input
    //     type="radio"
    //     name="noteSelection"
    //     value="naturalNotes"
    //     checked={noteSelection === "naturalNotes"}
    //     onChange={(e) => setNoteSelection(e.target.value)}
    //   />
    //   <label htmlFor="all">Natural Notes Only</label>
    // </div>
  );
}

export default DropdownMenu;
