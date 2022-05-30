import "./MainScreen.scss";
import Menu from "../../components/Menu/Menu";
import TopSection from "../TopSection/TopSection";

const MainScreen = () => {
  return (
    <div className="main-screen-section">
      <TopSection />
      <Menu />
    </div>
  );
};

export default MainScreen;
