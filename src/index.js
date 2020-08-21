import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Routine
    </h1>
    <div>
      <img alt="" src={img} />
      <img className="routineImage" alt="" src="https://picsum.photos/200" />
      <img className="routineImage" alt="" src="https://picsum.photos/200" />
      <img className="routineImage" alt="" src="https://picsum.photos/200" />
    </div>
  </div>,
  document.getElementById("root")
);
