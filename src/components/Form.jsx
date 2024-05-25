import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import "../css/form.css";
import Buttons from "./Buttons.jsx";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);
    const subject = "";
    try {
      const response = await fetch(
        "https://portfolio-mail-server.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, content: message, subject }),
        }
      );

      const data = await response;
      if (data.status != 200) {
        console.log("Message not sent");
        return;
      }
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("Message not sent");
    }
  };

  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="invi">
        <h2 className="font--header">CONTACT</h2>
      </div>
      <div className="ipt-box">
        <div className="ipt">
          <label htmlFor="p-name">NAME</label>
          <input
            autoComplete="off"
            id="p-name"
            type="text"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="ipt">
          <label htmlFor="p-email">EMAIL</label>
          <input
            autoComplete="off"
            id="p-email"
            type="email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="ipt">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name=""
            id="message"
            cols=""
            rows=""
            required
            onChange={handleMessageChange}
          ></textarea>
        </div>
      </div>

      <Buttons id="submitBtn" name="btn border font">
        SUBMIT
      </Buttons>
    </form>
  );
};

export default Form;
