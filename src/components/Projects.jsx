import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";

import { projects } from "../data.js";

export default function Projects({ title1, title2 }) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title1}</h2>
      </div>
      {projects.map((project, index) => {
        return (
          <BoxContent key={index}>
            <p className="details gap-between">
              {project.name}
              {project.liveLink && (
                <a
                  className="certificates-link"
                  target="_blank"
                  href={project.liveLink}
                >
                  Show Prototype
                </a>
              )}
              <a
                className="certificates-link"
                target="_blank"
                href={project.githubLink}
              >
                Github Repo
              </a>
            </p>
          </BoxContent>
        );
      })}
      <p className="details">
        More projects are posted on Github{" "}
        <a
          target="_blank"
          href="https://github.com/zaid-sinpie"
          className="certificates-link"
        >
          Check out
        </a>
      </p>
    </Box>
  );
}
