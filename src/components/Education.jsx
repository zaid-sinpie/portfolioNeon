import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";
export default function Education({ title}) {
  return (
      <Box id="education">
        <div className="invi">
          <h2 className="font--header">{title}</h2>
        </div>
        <BoxContent>
          <p className="details">
            - B.Tech.
            <br />
            - Electronics Enginnering.
            <br />
            - Completed my graduation in 2023.
            <br />- CGPA :- 8.19.
          </p>
        </BoxContent>
        <BoxContent>
          <p className="details">
            - HSC.
            <br />
            - Speciality PCMCS.
            <br />
            - Completed my HSC in 2018.
            <br />- Percentage :- 63.69%.
          </p>
        </BoxContent>
        <BoxContent>
          <p className="details">
            - SSC.
            <br />
            - Regular.
            <br />
            - Completed my SSC in 2016.
            <br />- Percentage :- 67.00%.
          </p>
        </BoxContent>
      </Box>
  );
}
