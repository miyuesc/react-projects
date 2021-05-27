import React from "react";

import { Button, Popover } from "antd";

function downloadButtons(props) {
  return (<div>
    <Button size={props.size} type={props.type || "primary"}>下载为XML</Button>
    <br />
    <Button size={props.size} type={props.type || "primary"}>下载为BPMN</Button>
    <br />
    <Button size={props.size} type={props.type || "primary"}>下载为SVG</Button>
  </div>)
}

function Toolbar(props) {
  return (<div className="bpmn-designer-toolbar">
    <Button.Group>
      <Button size={props.size} type={props.type || "primary"}>打开文件</Button>
      <Popover content={downloadButtons(props)} trigger="click" overlayClassName="toolbar-popover">
        <Button size={props.size} type={props.type || "primary"}>下载文件</Button>
      </Popover>
    </Button.Group>
  </div>)
}

export default Toolbar;
