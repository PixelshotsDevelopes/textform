import React, { useState } from 'react';
// Declare a new state variable, which we'll call "count"

export default function TextForm(props) {
    const handleUpperClick = () => {
        console.log("uppercase was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("converted to uppercase!","success");
    }
    const handleLowerClick = () => {
        console.log("Lowercase was clicked")
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to lowercase!","success");
    }
    const readminutes = () => {
        let x = 0.0071 * text.split(" ").length;
        if (x <= 0.0071) {
            return x = 0;
        } else {
            return x;
        }
    }
    //find email in text state
    const extractEmails = () => {
        let txt = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        props.showAlert("Email extracted!","success");
        return document.getElementById('email').innerHTML = txt.join(' / ');
    }
    const handleClearText = () => {
        console.log("Lowercase was clicked")
        props.showAlert("text cleared!","success");
        let newtext = "";
        
        setText(newtext)
    }
    const handleonchange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    const copyhandler = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to Clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed!","success");
    }
    const [text, setText] = useState("");
    //setText = "so this the text I have set to text usestate"//change the text with settext
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'042743'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={extractEmails}>find email</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={copyhandler}>copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words {text.length} characters</p> */}
                {/* //below text.trim method is copied from comments section of video ex1 solution plus method  
                  <p>{text.length>0 ? text.trim().split(" ").length : 0} words {text.length} characters</p>*/}
                
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <p>{readminutes()} Speaking time in Minutes</p>
                <span><b>found email</b></span>
                <p id='email'>none</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
