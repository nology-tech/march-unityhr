import "./ProfileSettings.scss";

import Employee from "../../assets/images/employee.png";
import Edit from "../../assets/images/edit-pencil.png";
import Return from "../../assets/images/return.png";

const ProfileSettings = () => {
  return (
    <div className="profile-settings">
      <div className="profile-settings__details">
        <div>
          <h2 className="profile-settings__details--heading">
            Profile Details
          </h2>
        </div>
        <div className="profile-settings__info">
          <img className="profile-settings__image" src={Employee} alt="Login" />
          <div className="profile-settings__desc">
            {" "}
            <p className="profile-settings__desc--name">Name (Database)</p>
            <p className="profile-settings__desc--job">JobTitle (Database)</p>
            <p className="profile-settings__desc--department">
              Department (Database)
            </p>
          </div>
        </div>
      </div>

      <div className="profile-settings__employee">
        <div className="profile-settings__employee--pronoun">
          <p>Pronoun</p>
          <div className="profile-settings__employee--dataP">(Database)</div>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
          />

          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>

        <div className="profile-settings__employee--firstname">
          <p>First Name</p>
          <div className="profile-settings__employee--dataF">(Database)</div>
          <img
            className="profile-settings____employee-edit"
            src={Edit}
            alt="Edit"
          />

          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>

        <div className="profile-settings__employee--lastname">
          <p>Last Name</p>
          <div className="profile-settings__employee--dataL">(Database)</div>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
          />

          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>

        <div className="profile-settings__employee--address">
          <p>Address:</p>
          <div className="profile-settings__employee--dataA">(Database)</div>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>

        <div className="profile-settings__employee--mobile">
          <p>Mobile Number </p>
          <div className="profile-settings__employee--dataM">(Database)</div>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
