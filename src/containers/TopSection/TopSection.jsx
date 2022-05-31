import "./TopSection.scss";
import Logo from "../../assets/images/dashboard-logo.png";
import DropDown from "../../assets/images/drop-down.png";
import Search from "../../components/Search/Search";

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="top-section__logo-section">
        <img src={Logo}/>
        <p>UnityHR</p>
      </div>
      <div className="top-section__search-section"><Search /></div>
      <div className="top-section__avatar-section"><div className="circle"></div><img src={DropDown} /></div>
    </div>
  );
};

export default TopSection;
