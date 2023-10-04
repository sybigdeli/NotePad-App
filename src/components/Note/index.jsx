import "./Note.css";
import NoteContent from "../NoteContent";
import NoteEmpty from "../NoteEmpty";
import { useContext } from "react";
import { noteContext } from "@/providers/NoteProvider";
import { useParams } from "react-router-dom";
function Note() {
  const { noteId } = useParams();
  const { notes, updateNote } = useContext(noteContext);

  const selectedNote = notes.find((n) => n.id == noteId);
  return (
    <div id="Note">
      {noteId == 0 || selectedNote ? (
        <NoteContent note={selectedNote} onUpdate={updateNote} />
      ) : (
        <NoteEmpty />
      )}
    </div>
  );
}

export default Note;
