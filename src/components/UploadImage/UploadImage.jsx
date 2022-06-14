import React, { useState } from "react";
import "./UploadImage.scss";

const UploadImage = () => {
  const [images, setImage] = useState([]);
  //   const [imageURLs, setImageURLs] = useState([]);

  //   useEffect(() => {
  //     if (images.length < 1) return;
  //     const newImageUrls = [];
  //     images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //     setImageURLs(newImageUrls);
  //   }, [images]);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = () => {
    setImage(images);
  };

  return (
    <div className="profile-image">
      <label htmlfor="image-upload" className="profile-image__input">
        <input type="file" onChange={handleSelectImage} />
        {/* {imageURLs.map((imageSrc) => (
          <img src={imageSrc} />
        ))} */}
      </label>
      <div className="profile-image__button">
        <button
          className="profile-image__button--upload"
          onClick={handleImageUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};
export default UploadImage;
