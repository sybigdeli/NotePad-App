import NoteListNoteCard from "./NoteListNoteCard";
import getRandomColor from "@/randomColor";
import { useState } from "react";

const NoteListItemTitle = [
  {
    id: 1,
    title: "خلاصه جلسه 12 صدکدرز",
    description: "دیزاین ماشین حساب رو ...",
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
function NoteListItem() {
  const [selected , setSelected] = useState(null);

  return NoteListItemTitle.map((note) => (
    
    <NoteListNoteCard
      key={note.id}
      {...note}
      // title={note.title}
      // description={note.description}
      // date={note.date}
      // borderColor={note.borderColor}
      selected={note.id === selected}
      onClick={() => setSelected(note.id)}
    />
  ));
}

export default NoteListItem;
