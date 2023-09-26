function NavBarItem({ text, icon, selected, onClick }) {
  return (
    <div className={`nav-bar-item ${selected && "nav-bar-item--selected"}`} onClick={onClick}>
      {icon}
      {text}
    </div>
  );
}

export default NavBarItem;
