import React from "react";

import { Button, Menu, Dropdown } from "antd";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  EyeOutlined,
  BugOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  UndoOutlined,
  RedoOutlined,
  SyncOutlined
} from "@ant-design/icons";

import "./style.scss";

function downloadButtons(props) {
  return (<Menu>
    <Menu.Item key="asxml">
      <Button size={props.size} type="link">下载为XML</Button>
    </Menu.Item>
    <Menu.Item key="asbpmn">
      <Button size={props.size} type="link">下载为BPMN</Button>
    </Menu.Item>
    <Menu.Item key="assvg">
      <Button size={props.size} type="link">下载为SVG</Button>
    </Menu.Item>
  </Menu>)
}

function getZoomScale() {
  return "100%"
}

function Toolbar(props) {
  return (<div className="bpmn-designer-toolbar">
    <Button.Group>
      <Button icon={<FolderOpenOutlined />} size={props.size} type={props.type || "primary"}>打开</Button>
      <Dropdown overlay={downloadButtons(props)} placement="bottomCenter">
        <Button icon={<DownloadOutlined />} size={props.size} type={props.type || "primary"}>下载</Button>
      </Dropdown>
      <Button icon={<EyeOutlined />} size={props.size} type={props.type || "primary"}>预览</Button>
      <Button icon={<BugOutlined />} size={props.size} type={props.type || "primary"}>模拟</Button>
    </Button.Group>
    <Button.Group>
      <Button icon={<ZoomOutOutlined />} size={props.size} />
      <Button size={props.size}>{getZoomScale()}</Button>
      <Button icon={<ZoomInOutlined />} size={props.size} />
    </Button.Group>
    <Button.Group>
      <Button icon={<UndoOutlined />} size={props.size} />
      <Button icon={<RedoOutlined />} size={props.size} />
      <Button icon={<SyncOutlined />} size={props.size} />
    </Button.Group>
  </div>)
}

export default Toolbar;
