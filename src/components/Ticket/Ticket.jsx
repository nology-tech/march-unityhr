import "./Ticket.scss";
import Dots from "../../assets/images/three-dots.png";

const Ticket = (props) => {

  const {color, category } = props;

  return (
    <>
    <div className="ticket">
      <div className="ticket__top" style={{backgroundColor: color}}></div>
      <div className="ticket__main">
        <div className="ticket__main__category">
          <h6 style={{color: color}}>{category}</h6>
        </div>
        <div className="ticket__main__summary">
          <h4>Reason for sickness</h4>
        </div>
        <div className="ticket__main__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consectetur minima blanditiis laudantium...
        </div>
        <div className="ticket__main__user">
          <div className="ticket__main__user--avatar">
            <div className="ticket__main__user--avatar-circle"></div>
            <div className="ticket__main__user--avatar-text">
              <p>John Dow</p>
              <p className="ticket__main__user--avatar-text-date">created: 12/02/2022</p>
            </div>
            </div>
          <div className="ticket__main__user--menu">
            <img src={Dots} alt="dots"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ticket;
