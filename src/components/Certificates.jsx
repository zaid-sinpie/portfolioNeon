import BoxContent from "./BoxContent.jsx";
import Box from "./Box.jsx";
import CertificateModal from "./CertificateModal.jsx";

export default function Certificates({ title, handleClick, modalState }) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      <BoxContent>
        <p className="details gap-between">
          Udemy Complete JavaScript course
          <a href="https://drive.google.com/file/d/1OP7DyTnYKpKhliyGqWvF7JzkBdT1n3yY/view?usp=sharing" target="_blank"
            className="certificates-link"
            id="javascript"
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          MongoDB
          <a target="_blank"
          href="https://drive.google.com/file/d/1kaxO4eVMcrqam6sCLSku_-JKXUhx1LCe/view?usp=sharing"
            className="certificates-link"
            id="mogodb"
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Career essential in Github
          <a
          target="_blank"
          href="https://drive.google.com/file/d/1IjVp8zJMD9X9DEHc81TB9ASqPAQFuLqb/view?usp=sharing"
            className="certificates-link"
            id="github"
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Infosys Python for data science
          <a
          target="_blank"
          href="https://drive.google.com/file/d/1YFpxnWALPfmgZCFNrLjXNNyOW_h3TWJB/view?usp=sharing"
            className="certificates-link"
            id="infoPython"
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          IBM Python for data science
          <a
          target="_blank"
          href="https://drive.google.com/file/d/1yNzlpl0NU5mVeyKdRXsG_o5lTVcH3LyU/view?usp=sharing"
            className="certificates-link"
            id="ibmPython"
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Infosys Internet of Things
          <a
            className="certificates-link"
            id="infoIot"
            onClick={() => handleClick("infoIot")}
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Infosys High Impact Presentation
          <a
            className="certificates-link"
            id="infoHip"
            onClick={() => handleClick("infoHip")}
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Pantech Internet of Things
          <a
            className="certificates-link"
            id="pantechIot"
            onClick={() => handleClick("pantechIot")}
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Kariavattom Cyber Forensics
          <a
            className="certificates-link"
            id="cyberForensics"
            onClick={() => handleClick("cyberForensics")}
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          WIT Bootcamp IOT & AWS
          <a
            className="certificates-link"
            id="witIotAws"
            onClick={() => handleClick("witIotAws")}
          >
            Show Certificate
          </a>
        </p>
      </BoxContent>
          <CertificateModal
          />
    </Box>
  );
}
