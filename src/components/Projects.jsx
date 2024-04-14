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
          Cattle trust website
          <a className="certificates-link" target='_blank' href="https://zaid-sinpie.github.io/Gaushala_website/">
            Show Prototype
          </a>
          <a className="certificates-link" target='_blank' href="https://github.com/zaid-sinpie/Gaushala_website">
            Github Repo
          </a>
        </p>
      </BoxContent>
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
          <a target="_blank" className="certificates-link" href="https://master--zaid-sinpie-tictactoe.netlify.app/">
            Show Prototype
          </a>
          <a target="_blank" className="certificates-link" href="https://github.com/zaid-sinpie/TicTacToe">
            Github Repo
          </a>
        </p>
      </BoxContent>
      <BoxContent>
        <p className="details gap-between">
          Morse Codec
          <a target="_blank" className="certificates-link" href="https://zaid-sinpie-morse-codec.netlify.app/">
            Show Prototype
          </a>
          <a target="_blank" className="certificates-link" href="https://github.com/zaid-sinpie/moresCodec">
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
        <p className="details">
        More projects are posted on Github <a target="_blank" href="https://github.com/zaid-sinpie"className="certificates-link">Check out</a>
        </p>
    </Box>
  );
}
