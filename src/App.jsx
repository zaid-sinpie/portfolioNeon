import "./App.css";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import BtnBox from "./components/BtnBox.jsx";
import Info from "./components/Info.jsx";
import Social from "./components/Social.jsx";
import Content from "./components/Content.jsx";
import Overlay from "./components/Overlay.jsx";
import Modal from "./components/Modal.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useState,useEffect } from "react";

// certificate modal and overlay
function App() {
  const [modalState, setModalState] = useState({
    open: false,
  });

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

//scroll function when button is clicked

  return (
    <Section>
      <ToastContainer/>
      <Header name="header">
        <BtnBox name="btnBox" />
        <Info />
        <Social></Social>
      </Header>
      <Content
        name="content border"
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
