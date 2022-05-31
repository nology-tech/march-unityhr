import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu"/>
      <MyTicketsBoard className="main-section__my-tickets-board" />
    </div>
  );
};

export default MainSection;