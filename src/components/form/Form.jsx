import React from 'react';

function Form({ onBackgroundChange, onTextChange, onImageChange }) {
  return (
    <div className="form-controls">
      <h2>Change Banner Settings</h2>

      <label htmlFor="backgroundColor">Select Background Color: </label>
      <input
        type="color"
        id="backgroundColor"
        onChange={onBackgroundChange}
      />
      <br />

      <label htmlFor="bannerText">Enter Banner Text: </label>
      <input
        type="text"
        id="bannerText"
        placeholder="Enter your text"
        onChange={onTextChange}
      />
      <br />


      <label htmlFor="bannerImage">Enter Image URL: </label>
      <input
        type="url"
        id="bannerImage"
        placeholder="Enter image URL"
        onChange={onImageChange}
      />
    </div>
  );
}

export default Form;
