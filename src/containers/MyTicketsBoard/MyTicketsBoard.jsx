import "./MyTicketsBoard.scss";

const MyTicketsBoard = () => {
  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__top">
        <div>My Tickets</div>
        <div>Schemas</div>
        <div>Filters</div>
      </div>
      <div className="my-tickets-board__main">Tickets area</div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};

export default MyTicketsBoard;
