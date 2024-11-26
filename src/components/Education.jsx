import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";

import { education } from "../data.js";

export default function Education({ title }) {
  return (
    <Box id="education">
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      {education.map((edu, index) => {
        return (
          <BoxContent key={index}>
            <p className="details">
              - {edu.title}.
              <br />- {edu.stream}.
              <br />- {edu.completion}
              <br />- {edu.marks}
            </p>
          </BoxContent>
        );
      })}
    </Box>
  );
}
