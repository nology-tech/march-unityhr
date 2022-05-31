import "./MyTicketsBoard.scss";

const MyTicketsBoard = () => {
  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__top">
        <div className="my-tickets-board__top__header">My Tickets</div>
        <div className="my-tickets-board__top__schemas">Schemas</div>
        <div className="my-tickets-board__top__filters">Filters</div>
      </div>
      <div className="my-tickets-board__main">Tickets area</div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};

export default MyTicketsBoard;
