import React from "react";
import Buttons from "./Buttons.jsx";

export default function Modal({ visible }) {
  const modalClass = visible ? "modal" : "modal hidden";

  return (
    <form className={modalClass}>
      <div className="invi">
        <h2 className="font--header">CONTACT</h2>
      </div>
      <div className="ipt-box">
        <div className="ipt">
          <label htmlFor="p-name">NAME</label>
          <input id="p-name" type="text" required/>
        </div>
        <div className="ipt">
          <label htmlFor="p-email">EMAIL</label>
          <input id="p-email" type="email" required/>
        </div>
      </div>
      <div className="ipt">
        <label htmlFor="message">MESSAGE</label>
        <textarea name="" id="message" cols="70" rows="14" required></textarea>
      </div>
      <Buttons id="submitBtn" name="btn border font">SUBMIT</Buttons>
    </form>
  );
}
