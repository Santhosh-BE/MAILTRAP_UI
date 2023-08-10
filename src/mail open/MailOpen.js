import React, { useEffect } from "react";
import EmailListSettings from "../Email body/EmailListSettings";
import "./MailOpen.css";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Avatar, IconButton } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  useGetEmailByIdQuery,
  useUpdateStatusApiMutation,
} from "../Services/Email/EmailApi";
import { queryString } from "../Components/Constants/constants";
import { useParams } from "react-router-dom";
import { has } from "lodash";

const MailOpen = () => {
  const { messageId } = useParams();
  const EmailByIdData = useGetEmailByIdQuery(
    queryString({ params: { id: messageId } }),
    {
      skip: !messageId,
    }
  );
  const [UpdateStatus, UpdateStatusData] = useUpdateStatusApiMutation();
  useEffect(() => {
    UpdateStatus({
      id: messageId,
      Read: 1,
    });
  }, []);
  return (
    <div className="emailDetail">
      <EmailListSettings arrow></EmailListSettings>

      {EmailByIdData?.isSuccess && has(EmailByIdData, "data") && (
        <div className="emailDetail-Message">
          <div className="emailDetail-header">
            <div className="emailDetail-headerLeft">
              <h4> {EmailByIdData?.data[0]?.subject} </h4>

              <IconButton>
                <LabelImportantIcon></LabelImportantIcon>
              </IconButton>
            </div>

            <div className="emailDetail-headerRight">
              <IconButton>
                <PrintIcon></PrintIcon>
              </IconButton>

              <IconButton>
                <LaunchIcon></LaunchIcon>
              </IconButton>
            </div>
          </div>

          <div className="emailDetails-MiddleHeader">
            <div className="emailDetails-MiddleHeaderLeft">
              <IconButton>
                <Avatar></Avatar>
              </IconButton>

              <h4> {EmailByIdData?.data[0]?.from} </h4>
              <p> to {EmailByIdData?.data[0]?.to} </p>
            </div>

            <div className="emailDetails-MiddleHeaderRight">
              <p> {EmailByIdData?.data[0]?.time} </p>

              <IconButton>
                <StarIcon></StarIcon>
              </IconButton>

              <IconButton>
                <ReplyIcon></ReplyIcon>
              </IconButton>

              <IconButton>
                <MoreVertIcon></MoreVertIcon>
              </IconButton>
            </div>
          </div>

          <div className="emailDetails-Body">
            <p> {EmailByIdData?.data[0]?.text} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailOpen;
