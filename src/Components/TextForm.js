import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>
    {
        console.log('UpperCase Funciton');
        // let newText = text.toUpperCase();
        // setText(newText);
        setText(text.toUpperCase());
    }

    const handleLoClick = ()=>
    {
        setText(text.toLowerCase());
    }

    const handleClearClick = ()=>
    {
        setText("");
    }

    const handleOnChange = (event)=>
    {
      setText(event.target.value);
    }

    const [text,setText] = useState("");

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Enter Text Here ..." onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
          <button className="btn btn-success mx-1" onClick={handleUpClick}>{props.UpperCase_btn}</button>
          <button className="btn btn-warning mx-1" onClick={handleLoClick}>{props.LowerCase_btn}</button>
          <button className="btn btn-danger mx-1" onClick={handleClearClick}>{props.clear_btn}</button>
          <div className="container my-3">
            <h2>Your Text Summary</h2>
              <p>{(text.length)?text.split(" ").length:text.split(" ").length-1} words and {text.length} characters.</p>
              <h2>Preview</h2>
              <p>{(text.length>0)?text:"Please Enter Something to Preview"}</p>
          </div>
    </div>
  )
}
