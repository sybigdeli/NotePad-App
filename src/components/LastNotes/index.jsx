import { useState } from "react";
import NavBarItem from "../Navbar/NavBarItem";
import DocIcon from "@/assets/images/icons/doc.svg";

const lastNotes = [
  {
    id: 1,
    name: "هدفم برای سال جدید",
  },
  {
    id: 2,
    name: "کتاب‌هایی که می‌خوام بخونم",
  },
  {
    id: 3,
    name: "خلاصه جلسه ۱۲ صدکدرز",
  },
];
//////////////////////////////aaaa/////////////////////

function LastNotes() {
  const [Selected, setSelected] = useState(null);
  return (
    <section className="last-notes-container">
      <h2>آخرین یادداشت‌ها</h2>

      <div className="last-notes">
        {lastNotes.map((item) => (
          <NavBarItem
            key={item.name}
            text={item.name}
            icon={DocIcon}
            selected={item.id === Selected}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default LastNotes;
