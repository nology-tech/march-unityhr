// import React, { useState } from "react";
import "./UploadFile.scss";

const UploadFile = () => {
  // const [images, setImage] = useState([]);

  // const handleSelectImage = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };

  // const handleImageUpload = () => {
  //   setImage(images);
  // };

  return (
    <div className="file-upload">
      <label htmlfor="file" className="file-upload__label">
        {" "}
        Choose File
        <input
          type="file"
          // onChange={handleSelectImage}
          className="file-upload__input"
        />
      </label>

      <br />

      {/* <div className="profile-image__button">
        <button
          className="profile-image__button--upload"
          onClick={handleImageUpload}
        >
          Upload
        </button>
      </div> */}
    </div>
  );
};
export default UploadFile;
