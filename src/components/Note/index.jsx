import "./Note.css";

function Note() {
  return (
    <div id="Note">
      <img src="public/Note.svg" className="Note-Image" />
      <h4 className="Note-Title">یک یادداشت را برای نمایش انتخاب کنید</h4>
      <p className="Note-Text">
        از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید ایجاد
        کنید.
      </p>
    </div>
  );
}

export default Note;
