import { createContext, useState } from "react";
import getRandomColor from "@/randomColor";
import { useNavigate, useParams } from "react-router-dom";
const noteContext = createContext();

const initialNotes = [
  {
    id: 1,
    title: "خلاصه جلسه 12 صدکدرز",
    description: `دیزاین یه ماشین حساب رو پیاده کردیم و مروری بر مطالب گذشته شد.
    دیزاین ماشین حساب شبیه ماشین حساب آیفون بود.
    مطالبی که مرور کردیم:
    - html tags
    - css flex
    - dom
    - functions
    - event listener
    
    در ادامه GIT رو نصب کردیم و با دستورات زیر name, email رو کانفیگ کردیم:
    git config --global user.name "FIRST_NAME LAST_NAME"
    git config --global user.email "MY_NAME@example.com"
    
    برای کامیت کردن، ابتدا باید تغییرات رو با دستور زیر به stage اضافه کنیم:
    git add .
    بعد برای کامیت کردن تغییرات تو stage دستور زیر رو استفاده می‌کنیم:
    git commit -m "this is my message for changes"
    
    برای کلون کردن یک ریپازیتوری از دستور زیر استفاده می‌کنیم:
    git clone https://... 
      `,
    date: "1 شهریور 1402",
    borderColor: `${getRandomColor()}`,
  },
  {
    id: 2,
    title: "کتاب‌هایی که می‌خوام بخونم",
    description: "اولین هدفم اینه که بتونم ...",
    date: "4 فروردین 1402",
    borderColor: `${getRandomColor()}`,
  },
  {
    id: 3,
    title: "هدف من برای سال جدید",
    description: "برادران کارامازوف ...",
    date: "20 خرداد 1402",
    borderColor: `${getRandomColor()}`,
  },
];

function NoteProvider({ children }) {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem("notes-app");
    return localData ? JSON.parse(localData) : initialNotes;
  });

  const updateNote = (key, newValue) => {
    if (noteId == 0) {
      const newNote = {
        id: notes.length + 1,
        [key]: newValue,
        date: new Date().toLocaleDateString("fa-IR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        borderColor: `${getRandomColor()}`,
      };

      const newNotes = [...notes, newNote];
      setNotes(newNotes);
      localStorage.setItem("notes-app", JSON.stringify(newNotes));
      navigate(`/note/${newNote.id}`);
      return;
    }
    const newNotes = notes.map((item) => {
      if (item.id != noteId) {
        return item;
      } else {
        item[key] = newValue;
        return item;
      }
    });
    setNotes(newNotes);
    localStorage.setItem("notes-app", JSON.stringify(newNotes));
  };

  const value = {
    notes,
    updateNote,
  };

  return <noteContext.Provider value={value}>{children}</noteContext.Provider>;
}
export { NoteProvider, noteContext };
