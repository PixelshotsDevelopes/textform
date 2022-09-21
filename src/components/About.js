// import React, { useState } from 'react';
import React from 'react';

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black"
  // })
    let myStyle = {
      color: props.mode === "dark"?"white":"#042743",
      backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white",
    }
  // const [btntext, setbtnText] = useState("Enable dark mode")
  // const toggleStyle = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //         color: "black",
  //         backgroundColor: "white"
  //       })
  //     setbtnText("Enable Dark mode")
  //   } else {
  //     setmystyle({
  //         color: "white",
  //         backgroundColor: "black"
  //       })
  //     setbtnText("Enable Light mode")
  //   }
  // }
  return (
    <div classNameName='container' >
      <h1 className='text-center my-3' style={{color: props.mode === "dark"?"white":"#042743"}}><strong> About Us</strong></h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Analize your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             textUtils gives you a simple way to analize your text quickly and effectively
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong> Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             textUtils is free character counting tool that provide instant character count and word count statistics for given text. textUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as chrome firefox internet explorer, safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays etc
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
