import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";

import { uiDesigns } from "../data.js";

export default function UiDesigns({ title }) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      {uiDesigns.map((design, index) => {
        return (
          <BoxContent key={index}>
            <p className="details gap-between">
              {design.title}
              <a
                className="certificates-link"
                target="_blank"
                href={design.link}
              >
                Show Design
              </a>
            </p>
          </BoxContent>
        );
      })}
    </Box>
  );
}
