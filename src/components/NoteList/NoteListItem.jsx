import { noteContext } from "@/providers/NoteProvider";
import NoteListNoteCard from "./NoteListNoteCard";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

function NoteListItem() {
  const { noteId } = useParams();
  const { notes } = useContext(noteContext);

  return notes.map((note) => (
    <Link to={`/note/${note.id}`} key={note.id}>
      <NoteListNoteCard {...note} selected={note.id == noteId} />
    </Link>
  ));
}

export default NoteListItem;
