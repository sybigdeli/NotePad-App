import "./Note.css";
import NoteIcone from '@/components/UI/Icons/Note'

function Note() {
  return (
    <div id="Note">
      <NoteIcone/>
      <h4 className="Note-Title">یک یادداشت را برای نمایش انتخاب کنید</h4>
      <p className="Note-Text">
        از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید ایجاد
        کنید.
      </p>
    </div>
  );
}

export default Note;
