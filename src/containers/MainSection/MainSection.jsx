import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";
// import EmployeeList from "../../components/EmployeeList/EmployeeList"
// import NotificationBoard from "../NotificationBoard/NotificationBoard";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu"/>
      <MyTicketsBoard className="main-section__my-tickets-board" />
      {/* <NotificationBoard 
      className="main-section__my-notification-board" />
      <EmployeeList /> */}
    </div>
  );
};

export default MainSection;
