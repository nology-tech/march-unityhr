import "./MainScreen.scss";
import TopSection from "../TopSection/TopSection";
import MainSection from "../MainSection/MainSection";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <TopSection className="main-screen__top-section" />
      <MainSection className="main-screen__main-section" />
     
    </div>
  );
};

export default MainScreen;
