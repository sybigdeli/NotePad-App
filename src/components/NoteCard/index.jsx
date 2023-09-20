
function NoreCard({ title, description, date, borderColor , selected , onClick }) {

  const borderColorstyle = { borderColor: borderColor , backgroundColor: selected ? "#FFFBFA" :  "#FCF1E3"};

  return (
    <div key={title} className={"note-cards__card"} style={borderColorstyle} onClick={onClick}>
      <div className="card__title">{title}</div>
      <div className="card__footer">
        <span className="card__description">{description}</span>
        <span className="card__date">{date}</span>
      </div>
    </div>
  );
}

export default NoreCard;
