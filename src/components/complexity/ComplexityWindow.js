import React from "react";
import Popup from "reactjs-popup";
import "./ComplexityWindow.css";

const Complexity = (props) => (
  <Popup
    trigger={<a href className="complexity-text" style={{cursor: "pointer"}}>{props.text ? props.text : "What does this mean?"} </a>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close-complexity-modal" onClick={close}>
          &times;
        </button>
        <div className="header" style={{textAlign: "center", fontSize: "1.5rem", fontWeight: "bold"}}> Fix Complexity </div>
        <div className="content">
          {' '}
          A rule's complexity describes how simple/difficult it is to fix the relevant misconfiguration:<br/><br/>
          <b>Easy - </b>set or refrain from setting a boolean key/value.<br/>
          <b>Medium - </b>set or refrain from setting a key/value from a pre-defined list of possible options. May require simple human intervention.<br/>
          <b>Hard - </b>the fix requires research, changes in other resources, and/or more intricate human intervention.<br/>
          
        </div>
      </div>
    )}
  </Popup>
);

export default Complexity;
