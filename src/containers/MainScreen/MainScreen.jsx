import "./MainScreen.scss";
import TopSection from "../TopSection/TopSection";
import MainSection from "../MainSection/MainSection";
import NotificationBoard from "../NotificationBoard/NotificationBoard";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <TopSection className="main-screen__top-section" />
      <MainSection className="main-screen__main-section" />
    {/*  <NotificationBoard className=""></NotificationBoard> */}

    </div>
  );
};

export default MainScreen;
