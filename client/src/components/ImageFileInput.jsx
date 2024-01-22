import React from "react";

const ImageFileInput = ({ onFileChange }) => {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        onFileChange(e.target.files[0]);
      }}
    ></input>
  );
};

export default ImageFileInput;
