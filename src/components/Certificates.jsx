import BoxContent from "./BoxContent.jsx";
import Box from "./Box.jsx";

import { certificates } from "../data.js";

export default function Certificates({ title }) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      {certificates.map((certificate, index) => {
        return (
          <BoxContent key={index}>
            <p className="details gap-between">
              {certificate.name}
              <a
                href={certificate.link}
                target="_blank"
                className="certificates-link"
                id={certificate.id}
              >
                Show Certificate
              </a>
            </p>
          </BoxContent>
        );
      })}
    </Box>
  );
}
