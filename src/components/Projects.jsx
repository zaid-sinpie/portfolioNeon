import Box from "./Box.jsx";
import BoxContent from "./BoxContent.jsx";
export default function Projects({ title1, title2 }) {
  return (
    <Box>
      <div className="invi">
        <h2 className="font--header">{title1}</h2>
      </div>
      <BoxContent>
        <p className="details gap-between">
          Greedy Game
          <a className="certificates-link" target='_blank' href="https://zaid-sinpie.github.io/Greedy-Game/">
            Show Prototype
          </a>
          <a className="certificates-link" target='_blank' href="https://github.com/zaid-sinpie/Greedy-Game">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Guess the Number Game
          <a className="certificates-link" target='_blank' href="https://zaid-sinpie.github.io/GuesNumberGame/">
            Show Prototype
          </a>
          <a className="certificates-link" target='_blank' href="https://github.com/zaid-sinpie/GuesNumberGame">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          TIC-TAC-TOE Game
          <a className="certificates-link" href="#">
            Show Prototype
          </a>
          <a className="certificates-link" href="#">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Website Homepage
          <a className="certificates-link" href="#">
            Show Prototype
          </a>
          <a className="certificates-link" href="#">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <div className="invi">
        <h2 className="font--header">{title2}</h2>
      </div>
      <BoxContent>
        <p className="details gap-between">
          Hydroponic system
          <a className="certificates-link" target='_blank' href="https://github.com/zaid-sinpie/Hydroponic">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Flappy Bird
          <a className="certificates-link" href="#">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Agriculture Monitoring System
          <a className="certificates-link" href="#">
            Github Repo
          </a>
        </p>
      </BoxContent>
        <p className="details">
        More projects are posted on Github <a href="#"className="certificates-link">Check out</a>
        </p>
    </Box>
  );
}
