import Logo from "@/assets/images/logo.svg";
import PlusIcon from "@/components/UI/Icons/Plus";
import SearchIcon from "@/components/UI/Icons/Search";
import Folders from "./NavbarFolders";
import LastNotes from "./NavbarLastNotes";
import ChangeTheme from "@/components/UI/Icons/ChangeTheme";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [changeTheme, setChangeTheme] = useState(true);
  const handleChangeTheme = () => {
    if (changeTheme) {
      document.documentElement.style.setProperty("--color", "#000");
      document.documentElement.style.setProperty("--color1", "#D2E0FB");
      document.documentElement.style.setProperty("--color2", "#F9F3CC");
      document.documentElement.style.setProperty("--color3", "#D7E5CA");
      document.documentElement.style.setProperty("--color4", "#8EACCD");
      setChangeTheme(false);
    } else {
      document.documentElement.style.setProperty("--color", "#fff");
      document.documentElement.style.setProperty("--color1", "#404258");
      document.documentElement.style.setProperty("--color2", "#474E68");
      document.documentElement.style.setProperty("--color3", "#50577A");
      document.documentElement.style.setProperty("--color4", "#6B728E");
      setChangeTheme(true);
    }
  };

  return (
    <div id="nav-bar">
      <header>
        <img src={Logo} />
        <button className="search-button">
          <SearchIcon />
        </button>
        <button className="light-mode__btn" onClick={handleChangeTheme}>
          <ChangeTheme />
        </button>
        <Link to="/note/0" className="new-note-button">
            <PlusIcon />
            یادداشت جدید
        </Link>
      </header>

      <LastNotes colorIcons={changeTheme} />

      <Folders colorIcons={changeTheme} />
    </div>
  );
}

export default NavBar;
