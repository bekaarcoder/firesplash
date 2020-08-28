import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (.jpeg or .png allowed)");
    }
  };

  return (
    <div>
      <form className="upload-form">
        <label htmlFor="file-upload" className="upload-file-custom">
          +
        </label>
        <input type="file" id="file-upload" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="file">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
