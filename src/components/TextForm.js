import React, { useState } from "react";
// useState is react hook used to declare state variable

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // Created State
  // we created text variable which is state
  // setText is function which change the value of state
  const [text, setText] = useState("Assigned the value of text STATE variable");
  // text = "new text"//this is wrong way to change text
  // setText("newText");//correct way to change text

  return (
    <>
      <div className="container mb-3 my-4">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          // onChangeEvent  returns event object
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-3 mx-3"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-3"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h3>Text Summary</h3>
        <p>word {text.split(" ").length} , characters {text.length}</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
