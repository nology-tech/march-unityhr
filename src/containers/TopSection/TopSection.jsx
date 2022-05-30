import "./TopSection.scss";

const TopSection = () => {
  return (
    <div className="top-section-area">
      <div className="top-section-area__logo-section">
        <img src="../../assets/images/dashboard-logo.png"/>
        <p>UnityHR</p>
      </div>
      <div className="top-section-area__search-section"></div>
      <div className="top-section-area__avatar-section"></div>
    </div>
  );
};

export default TopSection;
