import Buttons from "./Buttons.jsx";
import React, { useRef } from "react";

export default function BtnBox({ name }) {

  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const projectsRef = useRef(null);
  const uiDesignsRef = useRef(null);

  function scrollToRef(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function highlight(e, buttonName) {
    console.log(buttonName);
    switch (buttonName) {
      case "EDUCATION":
        scrollToRef(educationRef);
        break;
      case "SKILLS":
        scrollToRef(skillsRef);
        break;
      case "CERTIFICATES":
        scrollToRef(certificatesRef);
        break;
      case "PROJECTS":
        scrollToRef(projectsRef);
        break;
      case "UI DESIGNS":
        scrollToRef(uiDesignsRef);
        break;
      default:
        break;
    }
  }

  return (
    <div className={name}>
      <Buttons id="education" name="btn border font" select={(e) => highlight(e, "EDUCATION")}>
        EDUCATION
      </Buttons>
      <Buttons id="skills" name="btn border font" select={(e) => highlight(e, "SKILLS")}>
        SKILLS
      </Buttons>
      <Buttons id="certificates" name="btn border font" select={(e) => highlight(e, "CERTIFICATES")}>
        CERTIFICATES
      </Buttons>
      <Buttons id="projects" name="btn border font" select={(e) => highlight(e, "PROJECTS")}>
        PROJECTS
      </Buttons>
      <Buttons id="uiDesigns" name="btn border font" select={(e) => highlight(e, "UI DESIGNS")}>
        UI DESIGNS
      </Buttons>
    </div>
    )
}