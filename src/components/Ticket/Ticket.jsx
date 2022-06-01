import "./Ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket__top"></div>
      <div className="ticket__main">
        <div className="ticket__main__category">
          <h6>Sickness/Absence</h6>
        </div>
        <div className="ticket__main__summary">
          <h4>Reason for sickness</h4>
        </div>
        <div className="ticket__main__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consectetur minima blanditiis laudantium .
        </div>
      </div>
      <div className="ticket__user"></div>
    </div>
  );
};

export default Ticket;
