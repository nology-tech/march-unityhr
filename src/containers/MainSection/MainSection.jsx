import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import { BrowserRouter as Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main-section">
        <Menu className="main-section__menu" />
        <Outlet />
    </div>
  );
};

export default MainSection;
