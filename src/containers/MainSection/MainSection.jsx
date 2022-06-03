import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";
import EmployeeList from "../../components/EmployeeList/EmployeeList"

const MainSection = () => {
  return (
    <div className="main-section">
      <Menu className="main-section__menu"/>
      {/* <MyTicketsBoard className="main-section__my-tickets-board" /> */}
      <EmployeeList />
    </div>
  );
};

export default MainSection;
