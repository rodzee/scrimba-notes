import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { notesCollection, db } from "./firebase";

// onSnapshot listens for changes in the FS database and updates the local code
import {  onSnapshot, doc, addDoc, deleteDoc, setDoc} from "firebase/firestore";

export default function App() {
  const [notes, setNotes] = useState([]);

  // This code can be done with the "Optinal Channing Operator (?)"
  // const [currentNoteId, setCurrentNoteId] = useState(
  //   (notes[0] && notes[0].id) || "",
  // );

  // This is the Optional Channing version
  const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "");

  // This is where the code(answer) for the 1st challenge was
  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      // Sync up the local notes array with the snapshot data
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArr);
    });

    // this function will clean up any listener that was not used
    return unsubscribe;
  }, []);

  // This function creates a new note and nanoid() generates an id for it
  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoteRef.id);
  }

  // This rearranges the notes and puts the most recently modified on the top
 async function updateNote(text) {
    const docRef = doc(db, 'notes', currentNoteId)
    await setDoc(docRef, {body: text}, {merge: true})
  }

  // This does not work to rearrange the notes
  //** the code above is the correct version **
  //
  //   function updateNote(text) {
  //     setNotes((oldNotes) =>
  //       oldNotes.map((oldNote) => {
  //         return oldNote.id === currentNoteId
  //           ? { ...oldNote, body: text }
  //           : oldNote,
  // ;
  //       }),
  //     );
  //   }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  }

  // This function helps find the correct id so it can be highlited with a different color
  // ** check the Sidebar component **
  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
