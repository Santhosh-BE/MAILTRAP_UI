import React, { useState } from "react";
import "./Compose.css";
import { useComposePostApiMutation } from "../Services/Email/EmailApi";

const Compose = ({ setIsMessageOpen }) => {
  const fromEmail = localStorage.getItem("Email");
  const [sendEmail, setSendEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [ComposePostApi, ComposePostApiData] = useComposePostApiMutation();
  console.log(ComposePostApiData, "ComposePostApiData");
  const closeCompose = () => {
    setIsMessageOpen(false);
  };

  const submitInput = (e) => {
    e.preventDefault();
    let isValid = true;
    if (sendEmail === "") {
      alert("Email is required");
      isValid = false;
    } else if (Subject === "") {
      alert("Subject is required");
      isValid = false;
    } else if (Message === "") {
      alert("Message is required");
      isValid = false;
    }
    if (isValid) {
        var parts = fromEmail.split("@");
var username = parts[0];
      ComposePostApi({
        From: fromEmail,
        To: sendEmail,
        Subject: Subject,
        Text: Message,
        Cc: sendEmail,
        Html: "<b>Bold</b>",
        Bcc: sendEmail,
        Title: username,
      });
      setSendEmail("");
      setSubject("");
      setMessage("");
    setIsMessageOpen(false);

    }
  };

  return (
    <div className="compose">
      <div className="compose-header">
        <div className="compose-headerLeft">
          <span>New Message</span>
        </div>

        <div className="compose-headerRight">
     
        </div>
      </div>

      <form action="" onSubmit={submitInput}>
        <div className="compose-body">
          <div className="compose-bodyForm">
            <input
              type="email"
              name=""
              id=""
              placeholder="Recipients"
              value={sendEmail}
              onChange={(e) => {
                setSendEmail(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              value={Subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />

            <textarea
              name=""
              id=""
              cols=""
              rows="20"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="compose-footer">
          <div className="compose-footerLeft">
            <button type="submit">
              Send 
            </button>
          </div>

          <div className="compose-footerRight">
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
