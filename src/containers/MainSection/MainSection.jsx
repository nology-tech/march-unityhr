import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu" />
<<<<<<< HEAD
      <MyTicketsBoard className="main-section__my-tickets-board" />
      {/* <NotificationBoard 
      className="main-section__my-notification-board" />
      <EmployeeList />  */}
      {/* <SettingsMenu /> */}
=======
      <Outlet />
>>>>>>> 71770d01be8b9d945b1a6eb97e96fbdffc89d116
    </div>
  );
};

export default MainSection;
