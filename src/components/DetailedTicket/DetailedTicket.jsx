import "./DetailedTicket.scss";
import Cross from "../../assets/images/cross.png";
import Attachment from "../../assets/images/attachment.png";

const DetailedTicket = () => {
  return (
    <div className="modal">
      <div className="modal__top"></div>

      <div className="modal__main">
        <div className="modal__main__close">
          <img src={Cross} alt="cross" />
        </div>
        <div className="modal__main-info">
          <div className="modal__main-info__user">
            <div className="modal__main-info__user--avatar"></div>
            <p className="modal__main-info__user--avatar-name">John Dow</p>
            <p className="modal__main-info__user--avatar-role">Role</p>
            <p className="modal__main-info__user--avatar-department">
              Department
            </p>
          </div>
          <div className="modal__main-info__details">
            <div className="modal__main-info__details--category">
              <p>Sickness/Absence</p>
            </div>
            <div className="modal__main-info__details--summary">
              <h4>Reason for sickness</h4>
            </div>
            <div className="modal__main-info__details--text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                perferendis officiis rerum soluta? Autem est repudiandae
                sapiente adipisci ad soluta unde fugit libero vero deleniti
                impedit, consectetur quod quam architecto?
              </p>
            </div>
            <div className="modal__main-info__details--additional-info">
              <div className="modal__main-info__details--additional-info__supporting-info">
                <h5>Supporting Information</h5>
                <div className="modal__main-info__details--additional-info__supporting-info__attachment">
                  <img src={Attachment} alt="attachment" />
                  <p>doctors-note.pdf</p>
                </div>
              </div>
              <div className="modal__main-info__details--additional-info__date">
                <h5>Date Created</h5>
                <p>22/02/2022</p>
              </div>
            </div>
            <hr />
          </div>

        </div>

     
      </div>
    </div>
  );
};

export default DetailedTicket;
