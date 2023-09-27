import "./NoteContent.css";
import MoreICone from "@/components/UI/Icons/MoreIcone";
import FolderIcon from "@/components/UI/Icons/Folder";
import DateIcon from "../UI/Icons/DateIcon";
import { useState } from "react";
function NoteContent() {
  const [colorIcons , setcolorIcons] = useState(true);
  return (
    <div id="note-content">
      <header>
        <h4>خلاصه جلسه ۱۲ صد کدرز</h4>
        <MoreICone />
      </header>
      <section className="title-bar">
        <div className="title-bar__folder-description">
          <FolderIcon fill={colorIcons ? "white" : "black"}/>
          <p className="icon-title">پوشه</p>
          <p className="folder-type">شخصی</p>
        </div>
        <div className="title-bar__folder-date">
          <DateIcon fill={colorIcons ? "white" : "black"}/>
          <p className="icon-title">زمان ایجاد</p>
          <p className="folder-date">18 شهریور 1402</p>
        </div>
      </section>
        <textarea className="note-content"></textarea>
    </div>
  );
}

export default NoteContent;
