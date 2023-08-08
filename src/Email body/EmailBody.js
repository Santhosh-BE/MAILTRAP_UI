import React from "react";
import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteMailApiMutation } from "../Services/Email/EmailApi";
// import { useDispatch } from 'react-redux';
// import { openMessage } from '../redux store/composeSlice';

const EmailBody = ({ data }) => {
  const navigate = useNavigate();
  const [deleteMailApi, DeleteMailApiData] = useDeleteMailApiMutation();
  // const dispatch = useDispatch()

  const goToMessage = (messageId) => {
    navigate(`/mailbox/${messageId}`);
  };
  const handleDelete = (id) => {
    console.log(id, "id");
    deleteMailApi({ id: id.toString() });
  };
  return (
    <>
      {data?.map((item, i) => {
        const formattedTime = moment(data?.createdby).format("HH:mm a");
        return (
          <div className="emailBody">
            <div className="emailBody-Left">
              {/* <CheckBoxOutlineBlankIcon ></CheckBoxOutlineBlankIcon> */}
              {/* <Checkbox id={item?.id}  onChange={(e)=>console.log("id",e.target.id)} /> */}
              <DeleteIcon onClick={() => handleDelete(item.id)} />
              <StarBorderIcon></StarBorderIcon>
              <LabelOutlinedIcon></LabelOutlinedIcon>
              {item?.Read === 0 ?<h4> {item?.title} </h4>:item?.title}
            </div>
            <div
              className="emailBody-Middle"
              onClick={() => goToMessage(item?.id)}
              key={i}
            >
              <div className="emailBody-MiddleMessage">
                <p>
                  {item?.Read === 0 ? <b> {item?.subject} </b> : item?.subject}
                  {item?.message}{" "}
                </p>
              </div>
            </div>

            <div className="emailBody-Right">
              {item?.Read === 0 ? <b> {formattedTime} </b> : formattedTime}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EmailBody;
