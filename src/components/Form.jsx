import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/form.css";
import Buttons from "./Buttons.jsx";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(name, email, message);
  //   const subject = "";
  //   try {
  //     const response = await fetch(
  //       "https://portfolio-mail-server.onrender.com/sendmail",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name, email, content: message, subject }),
  //       }
  //     );

  //     const data = await response;
  //     if (data.status != 200) {
  //       console.log("Message not sent");
  //       return;
  //     }
  //     toast.success("Message sent successfully");
  //   } catch (error) {
  //     toast.error("Message not sent");
  //   }
  // };

  const form = useRef();

  const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    const loadingToast = toast.loading("message sneding! please wait");
    toast({ id: loadingToast });

    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          toast.dismiss(loadingToast);
          // console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Error sending email");
          toast.dismiss(loadingToast);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} className="modal" onSubmit={sendEmail}>
      <h2 className="font--header">CONTACT</h2>
      {/* <div className="ipt-box"> */}
      <div className="ipt">
        <label htmlFor="p-name">NAME</label>
        <input
          name="user_name"
          autoComplete="off"
          id="p-name"
          type="text"
          required
          // onChange={handleNameChange}
        />
      </div>
      <div className="ipt">
        <label htmlFor="p-email">EMAIL</label>
        <input
          name="user_email"
          autoComplete="off"
          id="p-email"
          type="email"
          required
          // onChange={handleEmailChange}
        />
      </div>
      <div className="textArea">
        <label htmlFor="message">MESSAGE</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          required
          // onChange={handleMessageChange}
        ></textarea>
      </div>
      {/* </div> */}

      <Buttons id="submitBtn" name="btn border font">
        SUBMIT
      </Buttons>
    </form>
  );
};

export default Form;
