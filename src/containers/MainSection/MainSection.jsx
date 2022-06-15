import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";
import NotificationBoard from "../NotificationBoard/NotificationBoard";
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu" />
      <MyTicketsBoard className="main-section__my-tickets-board" />
      <NotificationBoard className="main-section__my-notification-board" />
      <SettingsMenu />
      
    </div>
  );
};

export default MainSection;
