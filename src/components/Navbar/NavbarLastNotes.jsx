import { useContext, useState } from "react";
import NavBarItem from "./NavBarItem";
import DocIcon from "@/components/UI/Icons/Doc";
import { noteContext } from "@/providers/NoteProvider";
import { Link, useParams } from "react-router-dom";

//////////////////////////////aaaa/////////////////////

function LastNotes() {
  const {noteId} = useParams();
  const { notes } = useContext(noteContext);

  const lastNotes = notes.slice(-3);
  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => (
          <Link to={`/note/${item.id}`} key={item.id}>
            <NavBarItem
              text={item.title}
              icon={<DocIcon />}
              selected={item.id == noteId}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LastNotes;
