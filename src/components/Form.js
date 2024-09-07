import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f3s28zg", "template_1bv8i1a", form.current, {
        publicKey: "a6Dz9LDS2hh4atzKh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(t("success"));
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <input required placeholder="full name" type="text" name="name" />
        <input required placeholder="your e-mail" type="email" name="email" />
        <input required placeholder="subject" type="text" name="subject" />
        <textarea
          required
          placeholder="your message"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" value="send">
          Send
        </button>
      </form>
     
    </div>
  );
}
export default Form;
