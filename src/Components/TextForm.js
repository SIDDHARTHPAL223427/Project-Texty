
import { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const clickLoHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };

  const clickCopyText = () => {
    let textArea = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied to clipboard","success")
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor: props.mode === "light" ? "white" : "rgb(26 85 135)", color:props.mode === "light" ? "black" : "white"}}
          ></textarea>
        </div>

        <button
        disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={clickUpHandler}
        >
          Convert to uppercase
        </button>

        <button
        disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={clickLoHandler}
        >
          Convert to lowercase
        </button>

        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={clickCopyText}
        >
          Copy Text
        </button>
      </div>
</div>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>

      
    </>
  );
}

TextForm.propTypes = {
  text: PropTypes.array,
};
