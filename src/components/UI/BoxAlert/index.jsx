import './boxAlert.css';

const Alert = () => {
  return (
    <div className="alert-box">
      <h2 className="alert-box__title">Do you want to save the changes?</h2>
      <div className="alert-box__items">
        <button className="alert-box__btn alert-box__btn--green">Save</button>
        <button className="alert-box__btn alert-box__btn--red">Don't Save</button>
        <button className="alert-box__btn alert-box__btn--gray">Cancle</button>
      </div>
    </div>
  );
};

export default Alert;
