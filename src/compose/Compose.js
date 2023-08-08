import React, { useState } from "react";
import "./Compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
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
          <RemoveIcon></RemoveIcon>
          <HeightIcon></HeightIcon>
          <CloseIcon onClick={closeCompose}></CloseIcon>
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
              Send <ArrowDropDownIcon></ArrowDropDownIcon>
            </button>
          </div>

          <div className="compose-footerRight">
            {/* <FormatColorTextIcon></FormatColorTextIcon> */}
            <AttachFileIcon></AttachFileIcon>
            {/* <LinkIcon></LinkIcon>
                    <InsertEmoticonIcon></InsertEmoticonIcon>
                    <NoteAddIcon></NoteAddIcon>
                    <PhotoIcon></PhotoIcon>
                    <PhonelinkLockIcon></PhonelinkLockIcon>
                    <CreateIcon></CreateIcon>
                    <MoreVertIcon></MoreVertIcon>
                    <DeleteIcon></DeleteIcon> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
