import "./App.css";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import BtnBox from "./components/BtnBox.jsx";
import Info from "./components/Info.jsx";
import Social from "./components/Social.jsx";
import Content from "./components/Content.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Section>
      <ToastContainer />
      <Header name="header">
        {/* <BtnBox name="btnBox" /> */}
        <Info />
        <Social />
      </Header>
      <Content
        name="content border"
        handleClick={() => handleClick()}
      ></Content>
    </Section>
  );
}

export default App;
