import FolderIcon from "@/components/UI/Icons/Folder";
import NewFolderIcon from "@/components/UI/Icons/NewFolder";
import OpenFolderIcon from "@/components/UI/Icons/OpenFolder";
import NavBarItem from "./NavBarItem";
import Button from "@/components/UI/Button";
import { useEffect, useState } from "react";
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
    return newFolderValue === FolderName.name;
  });

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
      alert("not");
    } else if (isRepeat !== undefined || newFolderValue === "همه یادداشت ها") {
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

  useEffect(() => {
    const handleClick = (event) => {
      const isClickInForm = event.target.closest(".nav-bar-new-folder,header");
      if (!isClickInForm) {
        setIsShowNewFolder(false);
      }
    };
    if (isShowNewFolder) {
      document.body.addEventListener("click", handleClick);
    }
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [isShowNewFolder]);

  return (
    <section className="folders-container">
      <header>
        <h2>پوشه‌ها</h2>
        <button className="new-folder-button" onClick={handleClick}>
          <NewFolderIcon/>
        </button>
      </header>

      <div className="folders">
        {isShowNewFolder && (
          <form className="nav-bar-new-folder" onSubmit={handleCreateFolder}>
            <FolderIcon/>
            <input
              autoFocus
              type="text"
              placeholder="Name..."
              onChange={handleChangeInput}
            />
            <Button varient={"red"} type="submit">
              Ok
            </Button>
            <Button onClick={handleCancelNewFolder} varient={"green"}>
              Cancel
            </Button>
          </form>
        )}
        <NavBarItem
          key={0}
          text={"همه یادداشت ها"}
          icon={0 === Selected ? (<OpenFolderIcon/>) : (<FolderIcon/>)}
          selected={0 === Selected}
          onClick={() => setSelected(0)}
        />
        {folders.map((item) => (
          <NavBarItem
            key={item.id}
            text={item.name}
            icon={item.id === Selected ? (<OpenFolderIcon/>) : (<FolderIcon/>)}
            selected={item.id === Selected}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Folders;
