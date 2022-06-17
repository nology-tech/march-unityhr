import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";

 import EmployeeList from "../../components/EmployeeList/EmployeeList"
 import NotificationBoard from "../NotificationBoard/NotificationBoard";
 import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";
import Dashboard from "../Dashboard/Dashboard";

const MainSection = () => {
  return (
    <div className="main-section">

      <Menu className="main-section__menu"/>
      <Dashboard className="main-section-Dashboard"/>

      <MyTicketsBoard className="main-section__my-tickets-board" />
     
      <NotificationBoard 
      className="main-section__my-notification-board" />
      <EmployeeList /> 
      <SettingsMenu />
    </div>
  );
};

export default MainSection;
