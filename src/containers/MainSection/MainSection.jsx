import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu" />
      <Outlet />
    </div>
  );
};

export default MainSection;
