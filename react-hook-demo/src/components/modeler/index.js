import React, { useEffect } from "react";
import "./style.scss";

// 编辑器核心模块
import BpmnModeler from "bpmn-js/lib/Modeler";
// 翻译方法
import customTranslate from "@/bpmn-plugins/translate/customTranslate";
import translationsCN from "@/bpmn-plugins/translate/zh";
// 空模板创建方法
import createEmptyXML from "@/bpmn-plugins/createEmptyXML";
// 标签解析 Moddle
import camundaModdleDescriptor from "@/bpmn-plugins/descriptor/camundaDescriptor.json";
import activitiModdleDescriptor from "@/bpmn-plugins/descriptor/activitiDescriptor.json";
import flowableModdleDescriptor from "@/bpmn-plugins/descriptor/flowableDescriptor.json";
// 标签解析 Extension
import camundaModdleExtension from "@/bpmn-plugins/extension-moddle/camunda";
import activitiModdleExtension from "@/bpmn-plugins/extension-moddle/activiti";
import flowableModdleExtension from "@/bpmn-plugins/extension-moddle/flowable";

let bpmnModeler = null;

const translateModule = (translations) => ({
  translate: ["value", customTranslate(translations || translationsCN)]
});
const extension = (prefix) => {
  if (prefix === "activiti") return activitiModdleExtension;
  if (prefix === "flowable") return flowableModdleExtension;
  return camundaModdleExtension;
}
const moddleDescriptor = (prefix) => {
  if (prefix === "activiti") return activitiModdleDescriptor;
  if (prefix === "flowable") return flowableModdleDescriptor;
  return camundaModdleDescriptor;
}

function createNewProgram(props) {
  if (!bpmnModeler) return;
  // 将字符串转换成图显示出来
  const key = new Date().getTime();
  const newId = props.processId || `Process_${key}`;
  const newName = props.processName || `业务流程_${key}`;
  const xmlString = props.value || createEmptyXML(newId, newName, props.prefix);

  bpmnModeler.importXML(xmlString)
    .then(({ warnings }) => (warnings && warnings.length && warnings.forEach(warn => console.warn(warn))))
    .catch(e => (console.error(`[Process Designer Error]: ${e.message || e}`)))
}

function initModeler(props, canvasEl) {
  useEffect(() => {
    canvasEl.current && (bpmnModeler = new BpmnModeler({
      container: canvasEl.current,
      keyboard: props.keyboard ? { bindTo: document } : null,
      additionalModules: [
        translateModule(props.translations),
        extension(props.prefix),
        moddleDescriptor(props.prefix)
      ]
    }))
    window.bpmnInstances = {
      bpmnModeler
    }
    createNewProgram(props);
  })

  useEffect(() => createNewProgram(props))
}

function BpmnDesigner(props) {
  const canvasEl = React.createRef();

  initModeler(props, canvasEl)

  return (<div className="bpmn-designer-container">
    <div className="bpmn-designer-content" ref={canvasEl} />
  </div>)
}

export default BpmnDesigner;
