import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "./NavBarItem";
import { useState } from "react";

const folders = [
  {
    id : 1,
    name: "همه یاد‌داشت‌‌ها",
  },
  {
    id : 2,
    name: "کاری",
  },
  {
    id : 3,
    name: "مسافرت",
  },
  {
    id : 4,
    name: "رویدادها",
  },
  {
    id : 5,
    name: "باشگاه",
  },
];

function Folders() {
  const [Selected, setSelected] = useState(null);
  return (
    <section className="folders-container">
      <header>
        <h2>پوشه‌ها</h2>
        <button className="new-folder-button">
          <img src={NewFolderIcon} />
        </button>
      </header>

      <div className="folders">
        {folders.map((item) => (
          <NavBarItem
            key={item.id}
            text={item.name}
            icon={item.id === Selected ? OpenFolderIcon : folderIcon}
            selected={item.id === Selected}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Folders;
