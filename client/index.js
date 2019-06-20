// client entry point

import React from "react";
import ReactDOM from "react-dom";

import students from "../public/students.json"

ReactDOM.render(<div>{students[0].firstName}</div>, document.getElementById("app"));
