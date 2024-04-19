import React, { useState } from "react";

const TextForm = (props) => {

  const [text, setText] = useState("");
  const [copyText,setCopyText]=useState("Copy Text");  
    const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    setTimeout(() => {
        alert(`Converted to UpperCase !`)
    }, 200);
  };
  
  const handleLoCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    setTimeout(() => {
        alert(`Converted to LowerCase !`)
    }, 200);
  };
  
  const handleTitleCase = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0 || text[i - 1] === " ") {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
    setTimeout(() => {
        alert(`Converted to TitleCase !`)
    }, 200);
  };
 
  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    setCopyText('Copied..')

    setTimeout(() => {
        alert(`Text Copied!`)
    }, 200);
    };

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        setTimeout(() => {
            alert(`Extra Spaces Removed`)
        }, 200);
    }
  
   const handleClearText = () => {
    const newText = '';
    setText(newText);
    setTimeout(() => {
        alert(`Text Cleared !`)
    }, 200);
  };
 
  return (

    <>
      <div className="container"  style={{backgroundColor: props.mode==='dark'?'black':'white' ,color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="7"
            placeholder="Enter text"  style={{backgroundColor: props.mode==='dark'?'black':'white' ,color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTitleCase}>
          Convert To TitleCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} onMouseLeave={()=>{setCopyText('Copy Text')}}>
          {copyText}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} onMouseLeave={()=>{setCopyText('Copy Text')}}>
         Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3 "  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary </h2>

        <p>{text===''?'0':text.split(' ').length && text.charAt(text.length-1)===' '?(text.split(' ').length-1):text.split(' ').length} words and {text.length} characters</p>
        <p>{text===''?'0.000':0.008*text.split(' ').length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
};

export default TextForm;
