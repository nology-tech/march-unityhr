import React from "react";
import { useState ,useEffect} from "react";
import "./LoginSettings.scss";

import Employee from "../../assets/images/profile_picture.png";
import Edit from "../../assets/images/edit-pencil.png";
import Return from "../../assets/images/return.png";
import ProfileEdit from "../../assets/images/profile_edit.png";
import UploadImage from "../../components/UploadImage/UploadImage";

const LoginSettings = () => {
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [disablePassword, setDisablePassword] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [showReturn, setShowReturn] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const [employee, setEmployee] = useState(false);
  const getEmployee = () => {
    fetch("http://localhost:8080/employee/1")
      .then(res => res.json())
      .then(json =>setEmployee(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getEmployee();
  }, []);
  if(employee)
  {
 const firstName= employee.first_name;
 console.log(firstName)
  }

  const handleImageEdit = () => {
    if (showUpload === true) {
      setShowUpload(showUpload);
    }
    setShowUpload(!showUpload);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEdit = () => {
    setShowEdit(false);
    setShowReturn(true);
    setDisablePassword(!disablePassword);
  };

  const handleSubmit = () => {
    if (password === "") {
      setPasswordErrorMessage("Please enter a valid password");
    } else if (password.length <= 8) {
      setPasswordErrorMessage("Password should be more than 8 characters");
    } else {
      setPasswordErrorMessage("Valid Password");
      setShowReturn(false);
      setShowEdit(true);
      setDisablePassword(!disablePassword);
    }
  };
  return (
    <div className="login-settings">
      <div className="login-settings__details">
        <div>
          <h2 className="login-settings__details--heading">Login Details</h2>
        </div>
        <div className="login-settings__info">
          <div className="login-settings__overlay">
            <img className="login-settings__image" src={Employee} alt="Login" />
            <img
              className="login-settings__edit"
              src={ProfileEdit}
              alt="Login"
              onClick={handleImageEdit}
            />
          </div>
          <div className="login-settings__desc">
            {" "}
            <p className="display-settings__desc--name"> {employee.first_name}</p>
            <p className="display-settings__desc--job"> {employee.job_title}</p>
            <p className="display-settings__desc--department">
              {employee.department}
            </p>
            <div>{showUpload && <UploadImage />}</div>
          </div>
        </div>
      </div>

      <div className="login-settings__authentication">
        <div className="login-settings__email">
          <label htmlFor="email" className="login-settings__email--label">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            placeholder="steve.walker@unity.io"
            required
            className="login-settings__email--input"
          />
        </div>

        <div className="login-settings__password">
          <label
            htmlFor="password"
            className="login-settings__password--label "
          >
            Password
          </label>
          <input
            data-testid="login-password"
            id="password"
            type="password"
            required
            placeholder="••••••••••"
            disabled={disablePassword}
            onInput={handlePassword}
            className="login-settings__password--input"
          />
          {showEdit && (
            <img
              className="profile-settings__employee-edit"
              src={Edit}
              alt="Edit"
              onClick={handleEdit}
            />
          )}
          {showReturn && (
            <img
              className="profile-settings__employee-return"
              src={Return}
              alt="Return"
              onClick={handleSubmit}
            />
          )}
        </div>
        <span data-testid="password-error" className="errorText">
          {passwordErrorMessage}
        </span>
      </div>
    </div>
  );
};

export default LoginSettings;
