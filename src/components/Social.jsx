import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";
import Overlay from "./Overlay.jsx"; // Import the Overlay component
import '../css/socialContent.css';

export default function Social() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactButtonClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27 && modalVisible) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.querySelector(".overlay").addEventListener("click", closeModal);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVisible]);

  return (
    <div className="social-content">
      <button
        id="contactBtn"
        className="btn border font no-border"
        onClick={handleContactButtonClick}
      >
        CONTACT
      </button>
      <div className="links">
        <a
          className="link"
          target="_blank"
          href="https://leetcode.com/zaidmasuldar/"
        >
          <i className="fa-solid fa-code"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.hackerrank.com/profile/zaidmasuldar"
        >
          <i className="fa-brands fa-hackerrank"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://github.com/zaid-sinpie"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/zaid-masuldar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      {modalVisible && <Overlay overlayClass="overlay" />}
      <Modal visible={modalVisible} closeModal={closeModal} />
    </div>
  );
}
