function NavBarItem({ text, icon, selected, onClick }) {
  const backgroundColorSelected = {backgroundColor: selected && "#FFFBFA"};
  return (
    <div className="nav-bar-item" style={backgroundColorSelected} onClick={onClick}>
      <img src={icon} />
      {text}
    </div>
  );
}

export default NavBarItem;
