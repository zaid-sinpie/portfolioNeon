import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";
import UiDesigns from "./UiDesigns.jsx";

export default function Content({ name,modalState, handleClick}) {
  return (
    <main className={name}>
      <Education title={"EDUCATION"} />
      <Skills
        title={"TECHNICAL SKILLS"}
        title1={"INTERPERSONAL SKILLS"}
        title2={"LANGUAGES"}
      />
      <Certificates title={"CERTIFICATIONS"} handleClick={() => handleClick()} modalState={modalState}></Certificates>
      <Projects title1={"FRONTEND PROJECTS"} title2={"IOT PROJECTS"}></Projects>
      <UiDesigns title={"UI DESIGNS"}></UiDesigns>
    </main>
  );
}
