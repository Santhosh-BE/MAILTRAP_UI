import React from "react";
import "./EmailBody.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDeleteMailApiMutation } from "../Services/Email/EmailApi";

const EmailBody = ({ data }) => {
  const navigate = useNavigate();
  const [deleteMailApi, DeleteMailApiData] = useDeleteMailApiMutation();

  const goToMessage = (messageId) => {
    navigate(`/mailbox/${messageId}`);
  };
  const handleDelete = (id) => {
    console.log(id, "id");
    deleteMailApi({ id: id.toString() });
  };
  return (
    <>
    </>
  );
};

export default EmailBody;
