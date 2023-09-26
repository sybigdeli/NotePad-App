import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/components/UI/Icons/Plus";
import SearchIcon from "@/components/UI/Icons/Search";

import Folders from "./NavbarFolders";
import LastNotes from "./NavbarLastNotes";
import ChangeTheme from "@/components/UI/Icons/ChangeTheme";
import "./NavBar.css";
import { useState } from "react";
function NavBar() {
  const [changeTheme , setChangeTheme] = useState(true);
  const [colorIcons , setColorIcons] = useState(true);
  const handleChangeTheme = () => {
    if (changeTheme){
      document.documentElement.style.setProperty("--color" , "#000")
      document.documentElement.style.setProperty("--color1" , "#D2E0FB")
      document.documentElement.style.setProperty("--color2" , "#F9F3CC")
      document.documentElement.style.setProperty("--color3" , "#D7E5CA")
      document.documentElement.style.setProperty("--color4" , "#8EACCD")
      setChangeTheme(false);
      setColorIcons(false);
    }else{
      setColorIcons("white");
      document.documentElement.style.setProperty("--color" , "#fff")
      document.documentElement.style.setProperty("--color1" , "#404258")
      document.documentElement.style.setProperty("--color2" , "#474E68")
      document.documentElement.style.setProperty("--color3" , "#50577A")
      document.documentElement.style.setProperty("--color4" , "#6B728E")
      setChangeTheme(true);
      setColorIcons(true);
    }
  }
  return (
    <div id="nav-bar">
      <header>
        <img src={Logo} />
        <button className="search-button">
          <SearchIcon fill={colorIcons ? "white" : "black"}/>
        </button>
        <button className="light-mode__btn" onClick={handleChangeTheme}>
          <ChangeTheme fill={colorIcons ? "white" : "black"}/>
        </button>

        <button className="new-note-button">
          <PlusIcon/>
          یادداشت جدید
        </button>
      </header>

      <LastNotes />

      <Folders />
    </div>
  );
}

export default NavBar;
