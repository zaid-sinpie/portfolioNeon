import Box from "./Box.jsx";
import BoxSkill from "./BoxSkill.jsx";

import { technicalSkills, interpersonalSkills } from "../data.js";

export default function Skills({ title, title1, title2, name }) {
  return (
    <Box className={name}>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      <ul className="skill-arrange">
        {technicalSkills.map((item, idx) => {
          return <BoxSkill key={idx}>{item.skill}</BoxSkill>;
        })}
      </ul>
      <div className="invi">
        <h2 className="font--header">{title1}</h2>
      </div>
      <ul className="skill-arrange">
        {interpersonalSkills.map((item, idx) => {
          return <BoxSkill key={idx}>{item.skill}</BoxSkill>;
        })}
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
