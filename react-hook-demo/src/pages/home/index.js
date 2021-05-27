import React, { useState } from "react";
import "./home.scss";

import BpmnDesigner from "../../components/modeler";
import Toolbar from "../../components/toolbar";
import Penal from "../../components/penal";

function Home() {

  return(
    <div className="home-container">
      <Toolbar />
      <BpmnDesigner />
      <Penal />
    </div>
  )
}

export default Home
