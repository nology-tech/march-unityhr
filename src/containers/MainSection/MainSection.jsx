import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu />
      <MyTicketsBoard />
    </div>
  );
};

export default MainSection;
