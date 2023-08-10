import React, { useEffect } from "react";
import EmailListSettings from "../Email body/EmailListSettings";
import "./MailOpen.css";
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

            
            </div>

            <div className="emailDetail-headerRight">
              
            </div>
          </div>

          <div className="emailDetails-MiddleHeader">
            <div className="emailDetails-MiddleHeaderLeft">
            

              <h4> {EmailByIdData?.data[0]?.from} </h4>
              <p> to {EmailByIdData?.data[0]?.to} </p>
            </div>

            <div className="emailDetails-MiddleHeaderRight">
              <p> {EmailByIdData?.data[0]?.time} </p>

              
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
