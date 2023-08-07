import React from "react";
import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useNavigate } from "react-router-dom";
import moment from "moment";
// import { useDispatch } from 'react-redux';
// import { openMessage } from '../redux store/composeSlice';

const EmailBody = ({ data }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const goToMessage = (messageId) => {
    navigate(`/mailbox/${messageId}`);
  };

  return (
    <>
      {data?.map((item,i) => {
        const formattedTime = moment(data?.createdby).format("HH:mm a");
        return (
          <div className="emailBody" onClick={() => goToMessage(item?.id)} key={i}>
            <div className="emailBody-Left">
              <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
              <StarBorderIcon></StarBorderIcon>
              <LabelOutlinedIcon></LabelOutlinedIcon>

              <h4> {item?.name} </h4>
            </div>

            <div className="emailBody-Middle">
              <div className="emailBody-MiddleMessage">
                <p>
                  <b> {item?.subject} </b> {item?.message}{" "}
                </p>
              </div>
            </div>

            <div className="emailBody-Right">
              <p> {formattedTime} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EmailBody;
