import React from "react";
import { useState } from "react";
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
            <p className="login-settings__desc--name">Name (Database)</p>
            <p className="login-settings__desc--job">JobTitle (Database)</p>
            <p className="login-settings__desc--department">
              Department (Database)
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
            placeholder="??????????????????????????????"
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
