import "./NoteList.css";
import NoteListItem from "@/components/NoteList/NoteListItem";
function NoteList() {
  return (
    <div id="note-list">
      <header>
        <div className="note-list__title">
          <h1>همه یادداشت‌ها</h1>
        </div>
      </header>
      <div className="note-cards">
        <NoteListItem />
      </div>
    </div>
  );
}

export default NoteList;
