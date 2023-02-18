import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ModalComponent from "./components/ModalComponent";
import NavBarComponent from "./components/NavBarComponent";
import CardComponent from "./components/CardComponent";
import ScrollToTopButtonComponent from "./components/ScrollToTopButtonComponent";
import React, { useState, useEffect, useRef } from "react";
import { getElementFromDataPageWithAppKey } from "./js/returnCaspioElements";
import useCaspio from "./hooks/useCaspio";

function App() {
  const [prospect, setProspect] = useCaspio("bceeb000ad4304c44a254b55adad", { id_Prospect: "RQ9IMKB8" });
  const [opportunity, setOpportunity] = useCaspio("bceeb0006184ac2f67364f8fb37f", { id_Opportunity: "XKKCFY58" });

  useEffect(() => {
    console.log("PRO", prospect);
  }, [prospect]);

  useEffect(() => {
    console.log("OPP", opportunity);
  }, [opportunity]);

  return (
    <div className="App" id="page-top">
      <ScrollToTopButtonComponent />
      <NavBarComponent />
      <ModalComponent />
      <div className="row">
        <CardComponent size="6" />
        <CardComponent size="6" />
      </div>
      <div className="btn btn-primary" onClick={() => setProspect({ id_Prospect: "CX6SYLZD" })}>
        click Prospect
      </div>
      <br></br>
      <br></br>
      <div className="btn btn-primary" onClick={() => setOpportunity({ id_Opportunity: "RY9M68HX" })}>
        click Opp
      </div>
      {/* <div ref={ref} style={{display: show ? 'block': 'none'}}></div> */}
    </div>
  );
}

export default App;
