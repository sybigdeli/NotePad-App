
function NoreCard({ title, description, date, borderColor , selected , }) {

    const borderColorstyle = { borderColor: borderColor};
  
    return (
      <div key={title} className={`note-cards__card ${selected && "note-cards__card--selected"}`} style={borderColorstyle}>
        <div className="card__title">{title}</div>
        <div className="card__footer">
          <span className="card__description">{description}</span>
          <span className="card__date">{date}</span>
        </div>
      </div>
    );
  }
  
  export default NoreCard;
  