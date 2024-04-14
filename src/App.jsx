import "./App.css";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import BtnBox from "./components/BtnBox.jsx";
import Info from "./components/Info.jsx";
import Social from "./components/Social.jsx";
import Content from "./components/Content.jsx";
import Overlay from "./components/Overlay.jsx";
import Modal from "./components/Modal.jsx";

import { useState } from "react";
import { useEffect } from "react";

// certificate modal and overlay
function App() {
  const [modalState, setModalState] = useState({
    open: false,
  });

  function handleClick(id) {
    setModalState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      // Close all modals when Escape key is pressed
      setModalState({});
    }
  };
  
  document.addEventListener("keydown", handleKeyPress);
  return () => {
    document.querySelector('.overlay').addEventListener('click',function(){
      setModalState({})
    })
    document.removeEventListener("keydown", handleKeyPress);
  };
}, [modalState, setModalState]);

const toggleModalState = () => {
  setModalState(modalState => !modalState)
}

  return (
    <Section>
      <Header name="header">
        <BtnBox name="btnBox" />
        <Info />
        <Social></Social>
      </Header>
      <Content
        name="content border"
        modalState={modalState}
        handleClick={() => handleClick()}
      ></Content>
      <Overlay
        overlayClass={
          modalState.open
            ? "overlay"
            : "overlay hidden"
        }
        onClick={() => {}}
      />
      <Modal></Modal>
    </Section>
  );
}

export default App;
