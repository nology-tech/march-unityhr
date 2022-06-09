import "./DetailedTicket.scss";
import Cross from "../../assets/images/cross.png";
import Attachment from "../../assets/images/attachment.png";
import DropDown from "../../assets/images/drop-down.png";
import Circle from "../../assets/images/blue-circle.png";
import Pencil from "../../assets/images/edit-pencil.png";
import Bin from "../../assets/images/bin.png";

const DetailedTicket = (props) => {
  const { togglePopUp } = props;
  return (
    <>
      <div className="area"></div>
      <div className="modal">
        <div className="modal__top"></div>

        <div className="modal__main">
          <div className="modal__main__close">
            <img src={Cross} alt="cross" onClick={togglePopUp} />
          </div>
          <div className="modal__main-info">
            <div className="modal__main-info__user">
              <div className="modal__main-info__user__top">
                <div className="modal__main-info__user__top--avatar"></div>
                <p className="modal__main-info__user__top--avatar-name">
                  John Dow
                </p>
                <p className="modal__main-info__user__top--avatar-role">Role</p>
                <p className="modal__main-info__user__top--avatar-department">
                  Department
                </p>
              </div>
              <div className="modal__main-info__user__bottom">
                <div className="modal__main-info__user__bottom-circle grey">
                  <img src={Pencil} alt="Edit" />
                </div>
                <div className="modal__main-info__user__bottom-circle red">
                  <img src={Bin} alt="Delete" />
                </div>
              </div>
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
              <div className="modal__main-info__details--notifications">
                <h5>Notifications</h5>
                <div className="modal__main-info__details--notifications__table">
                  <div className="modal__main-info__details--notifications__table-avatar">
                    <img
                      src={DropDown}
                      alt="drop down"
                      className="modal__main-info__details--notifications__table-avatar__dropdown"
                    />
                    <div className="modal__main-info__details--notifications__table-avatar__user">
                      <div className="modal__main-info__details--notifications__table-avatar__user-picture"></div>
                      <img
                        src={Circle}
                        alt="active circle"
                        className="modal__main-info__details--notifications__table-avatar__user-circle"
                      />
                    </div>
                  </div>
                  <div className="modal__main-info__details--notifications__table-caption">
                    <h4 className="modal__main-info__details--notifications__table-caption__name">
                      Greg Sauer
                    </h4>
                    <p className="modal__main-info__details--notifications__table-caption__summary">
                      Commented on your request{" "}
                      <strong>"Reason for sickness"</strong>
                    </p>
                  </div>
                  <div className="modal__main-info__details--notifications__table-time">
                    16:23
                  </div>
                  <div> </div>
                  <div className="modal__main-info__details--notifications__table-main">
                    <div className="modal__main-info__details--notifications__table-main-text">
                      Hi Peter,
                      <br />
                      Thanks for uploading a doctor's note to explain your
                      sickness. Hope you're feeling much better now.
                      <br />
                      Kind regards, Greg
                    </div>
                    <div className="modal__main-info__details--notifications__table-main-date">
                      23/09/22 at 16:23
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="modal__main-info__details--reply">
                <h5>Reply</h5>
                <textarea
                  className="modal__main-info__details--reply-textarea"
                  placeholder="Please use this space to add a response/update to this request"
                ></textarea>
              </div>
              <input
                type="button"
                value="Send"
                className="modal__main-info__details--button"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedTicket;
