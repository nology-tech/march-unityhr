import "./MyTicketsBoard.scss";
import Ticket from "../../components/Ticket/Ticket";

const MyTicketsBoard = () => {
  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__top">
        <div className="my-tickets-board__top__header"><h3>My Tickets</h3></div>
        <div className="my-tickets-board__top__schemas">Schemas</div>
        <div className="my-tickets-board__top__filters">Filters</div>
      </div>
      <div className="my-tickets-board__main">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};

export default MyTicketsBoard;
