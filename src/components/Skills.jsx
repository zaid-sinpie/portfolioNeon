import Box from "./Box.jsx";
import BoxSkill from "./BoxSkill.jsx";
export default function Skills({ title ,title1, title2, name}) {
  return (
    <Box className={name}>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      <ul className="skill-arrange">
        <BoxSkill>HTML5</BoxSkill>
        <BoxSkill>CSS3</BoxSkill>
        <BoxSkill>JavaScript</BoxSkill>
        <BoxSkill>ReactJs</BoxSkill>
        <BoxSkill>OOP</BoxSkill>
        <BoxSkill>C/C++</BoxSkill>
        <BoxSkill>Python</BoxSkill>
        <BoxSkill>Figma</BoxSkill>
        <BoxSkill>Tailwind CSS</BoxSkill>
        <BoxSkill>Bootstrap</BoxSkill>
        <BoxSkill>Media Query</BoxSkill>
        <BoxSkill>UI/UX</BoxSkill>
        <BoxSkill>Git/Github</BoxSkill>
        <BoxSkill>Responsive Designing</BoxSkill>
        <BoxSkill>AJAX</BoxSkill>
        <BoxSkill>IOT</BoxSkill>
      </ul>
      <div className="invi">
        <h2 className="font--header">{title1}</h2>
      </div>
      <ul className="skill-arrange">
        <BoxSkill>Communication</BoxSkill>
        <BoxSkill>Teamwork</BoxSkill>
        <BoxSkill>Problem Solving</BoxSkill>
        <BoxSkill>Quick Learner</BoxSkill>
        <BoxSkill>Active Listening</BoxSkill>
        <BoxSkill>Attention to details</BoxSkill>
        <BoxSkill>Critical thinking</BoxSkill>
      </ul>
      <div className="invi">
        <h2 className="font--header">{title2}</h2>
      </div>
      <ul className="skill-arrange">
        <BoxSkill>ENGLISH</BoxSkill>
        <BoxSkill>MARATHI</BoxSkill>
        <BoxSkill>HINDI</BoxSkill>
      </ul>
    </Box>
  );
}
