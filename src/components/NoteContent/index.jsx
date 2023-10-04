import "./NoteContent.css";
import MoreICone from "@/components/UI/Icons/MoreIcone";
import FolderIcon from "@/components/UI/Icons/Folder";
import DateIcon from "../UI/Icons/DateIcon";

function NoteContent({ note, onUpdate }) {
  return (
    <div id="note-content">
      <header>
        <input
          type="text"
          className="note-content-title"
          value={note ? note.title : ""}
          placeholder="عنوان یادداشت خود را وارد نمایید"
          onChange={(e) => onUpdate("title", e.target.value)}
        />
        <MoreICone />
      </header>
      <section className="title-bar">
        <div className="title-bar__folder-description">
          <FolderIcon />
          <p className="icon-title">پوشه</p>
          <p className="folder-type">شخصی</p>
        </div>
        <div className="title-bar__folder-date">
          <DateIcon />
          <p className="icon-title">زمان ایجاد</p>
          <p className="folder-date">{note ? note.date : ""}</p>
        </div>
      </section>
      <textarea
        className="note-content"
        placeholder="هر آنچه دل تنگت می خواهد بنویسد"
        value={note ? note.description : ""}
        onChange={(e) => onUpdate("description", e.target.value)}
      ></textarea>
    </div>
  );
}

export default NoteContent;
