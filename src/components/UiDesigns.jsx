import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";
export default function UiDesigns({title}) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title}</h2>
      </div>
      <BoxContent>
        <p className="details gap-between">
          Bike Pamphlet
          <a className="certificates-link" target='_blank' href="https://www.figma.com/file/vSds8F4jc8BSiuPYSEUYOq/bike?type=design&node-id=0%3A1&mode=design&t=HZzrc0rYEnckktdV-1">
            Show Design
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Flying Car
          <a className="certificates-link" target='_blank' href="https://www.figma.com/file/L3EBT7NLbMHWNB5Ori5Gwh/futureBike?type=design&mode=design&t=HZzrc0rYEnckktdV-1">
            Show Design
          </a>
        </p>
      </BoxContent>
    </Box>
  );
}
