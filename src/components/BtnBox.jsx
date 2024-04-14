import Buttons from "./Buttons.jsx";
import React, { useRef } from "react";

export default function BtnBox({ name }) {
  return (
    <div className={name}>
      <Buttons id="education" name="btn border font">
        EDUCATION
      </Buttons>
      <Buttons id="skills" name="btn border font">
        SKILLS
      </Buttons>
      <Buttons id="certificates" name="btn border font">
        CERTIFICATES
      </Buttons>
      <Buttons id="projects" name="btn border font">
        PROJECTS
      </Buttons>
      <Buttons id="uiDesigns" name="btn border font">
        UI DESIGNS
      </Buttons>
    </div>
  );
}
