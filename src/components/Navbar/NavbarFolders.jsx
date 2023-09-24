import folderIcon from "@/assets/images/icons/folder.svg";
import NewFolderIcon from "@/assets/images/icons/new-folder.svg";
import OpenFolderIcon from "@/assets/images/icons/open-folder.svg";
import NavBarItem from "./NavBarItem";
import Button from "../UI/Button";
import { useState } from "react";

const initialFolders = [
  {
    id: 1,
    name: "کاری",
  },
  {
    id: 2,
    name: "مسافرت",
  },
  {
    id: 3,
    name: "رویدادها",
  },
  {
    id: 4,
    name: "باشگاه",
  },
];

function Folders() {
  const [Selected, setSelected] = useState(null);
  const [isShowNewFolder, setIsShowNewFolder] = useState(false);
  const [newFolderValue, setNewFolderValue] = useState();
  const [folders, setFolders] = useState(initialFolders);
  const isRepeat = folders.find((FolderName) => {
    return newFolderValue === FolderName.name
  })

  const handleClick = () => {
    setIsShowNewFolder(true);
  };
  const handleCancelNewFolder = () => {
    setIsShowNewFolder(false);
  };
  const handleCreateFolder = () => {
    if (
      newFolderValue === "" ||
      newFolderValue === null ||
      newFolderValue === undefined
    ) {
      alert("Please Enter a Name");
    } else if (isRepeat !== undefined ||
      newFolderValue === "همه یادداشت ها"
    ) {
      alert("Name used");
    } else {
      setFolders([
        { name: newFolderValue, id: folders.length + 1 },
        ...folders,
      ]);
      setNewFolderValue(null);
      setIsShowNewFolder(false);
    }
  };
  const handleChangeInput = (e) => {
    setNewFolderValue(e.target.value);
  };
  return (
    <section className="folders-container">
      <header>
        <h2>پوشه‌ها</h2>
        <button className="new-folder-button" onClick={handleClick}>
          <img src={NewFolderIcon} />
        </button>
      </header>

      <div className="folders">
        {isShowNewFolder && (
          <form className="nav-bar-new-folder" onSubmit={handleCreateFolder}>
            <img src={folderIcon} />
            <input
              type="text"
              placeholder="Name..."
              onChange={handleChangeInput}
            />
            <Button varient={"red"} type="submit">Ok</Button>
            <Button onClick={handleCancelNewFolder} varient={"green"}>Cancel</Button>
          </form>
        )}
        <NavBarItem
          key={0}
          text={"همه یادداشت ها"}
          icon={0 === Selected ? OpenFolderIcon : folderIcon}
          selected={0 === Selected}
          onClick={() => setSelected(0)}
        />
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
