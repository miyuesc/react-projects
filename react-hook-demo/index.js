import React from "react"
import ReactDom from "react-dom"

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";

import "@/styles/base.scss"
import "antd/dist/antd.css"

import App from "@/app";

ReactDom.render(<App />, document.getElementById("root"))
