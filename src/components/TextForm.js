import React , {useState} from "react";


export default function TextForm(props) {
  const [text , setText] = useState("");

  function handleUpClick(){
    props.showAlert("Converted to uppercase" , "primary");
    console.log("uppercase clicked!!!");

    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleTextField(event){
    setText(event.target.value);
  }

  function handleLoClick(){
    props.showAlert("Converted to Lowercase" , "primary");
    let t = text.toLowerCase();
    setText(t);
  }

  const handleCopy = ()=> {
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0 , 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied" , "primary");
  }

  const clearText = ()=>{
    props.showAlert("Clear Text" , "success");
    setText("");
  }

  return (
    <>
      <div className="container">
        <h3 className="my-3">{props.heading} </h3>
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleTextField}></textarea>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-dark mt-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mt-3" onClick={clearText}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        {/* Ectra writing */}
        <p>{ text.replaceAll("\n" , " ").trim().split(" ").length === 1 && text.replaceAll("\n" , " ").trim() === ""?
            "0" : text.replaceAll("\n" , " ").trim().split(" ").length
        } words and { text.length } characters</p>

        <p>{text.replaceAll("\n" , " ").trim().split(" ").length * 3.3} seconds read</p>

        <h3>Preview</h3>

        <p>{ text.length !== 0 ? text : "Enter the text to preview" }</p>
      </div>
    </>
  );
}
