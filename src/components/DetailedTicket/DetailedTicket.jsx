import "./DetailedTicket.scss";
import Cross from "../../assets/images/cross.png";

const DetailedTicket = () => {
  return (
    <div className="modal">
      <div className="modal__top"></div>
      <div className="modal__close">
        <img src={Cross} alt="cross" />
      </div>
      <div className="modal__main">
        <div className="modal__main__user">
        <div className="modal__main__user--avatar"></div>
        <p>John Dow</p>
        <p>Role</p>
        <p>Department</p>
        </div>
        <div className="modal__main__details">
          <div className="modal__main__details--category">
            <p>Sickness/Absence</p>
          </div>
          <div className="modal__main__details--summary">
            <h4>Reason for sickness</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedTicket;
