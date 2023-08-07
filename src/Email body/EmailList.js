import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";
import EmailBody from "./EmailBody";
import "./EmailList.css";
import EmailListSettings from "./EmailListSettings";
import EmailType from "./EmailType";
import { useGetAllEmailQuery } from "../Services/Email/EmailApi";
import { has } from "lodash";
import moment from "moment";

const EmailList = () => {
  const [emailData, setEmailData] = useState([]);
  const date = new Date();
  const timeZone = "Asia/Kolkata";
  const formatters = [
    new Intl.DateTimeFormat("en-US", { timeStyle: "short", timeZone }),
  ];
  const GetAllEmailList = useGetAllEmailQuery();
  console.log(GetAllEmailList, "GetAllEmailList");
  console.log(formatters[0].format(date));
  // const Emails = [
  //   {
  //     id: 1,
  //     from: "santhoshKaliyannan@gmail.com",
  //     fromName: "Santhosh Kaliyannan",
  //     emailText: "Test email",
  //     sub: "Create a sample email UI in react js",
  //   },
  // ];
  const refreshClick = () => {
    GetAllEmailList.refetch();
  };
  // const getEmailAll = async () => {
  //   const response = await fetch(
  //     //   "http://192.168.1.131:3001/user/getallusers"
  //     "https://a920-103-137-148-190.ngrok-free.app/api/mail",
  //     {
  //       headers: {
  //         "ngrok-skip-browser-warning": true,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setEmailData(data);
  // };
  // useEffect(() => {
  //   getEmailAll();
  // }, []);

  const sentRecord = false;
  // const [Emails, setEmails] = useState([]);
  // const user = useSelector((state) => state.user.user)
  // const sentRecord = useSelector((state) => state.sentRecord.value)

  // useEffect(() => {
  //     db.collection('composeData').orderBy('timestamp', 'desc').onSnapshot((collection) => {
  //         setEmails(collection.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data()
  //         })))
  //     })
  // }, [])

  return (
    <div className="emailList">
      <EmailListSettings refreshClick={refreshClick} />
      {/* <EmailType></EmailType> */}

      {GetAllEmailList?.isSuccess &&
        has(GetAllEmailList, "data") &&
        GetAllEmailList?.data?.map((data) => {
          const formattedTime = moment(data?.createdby).format("HH:mm a");
          return (
            <>
              {" "}
              {
                // data.email === user.email &&
                sentRecord === false && (
                  <EmailBody
                    key={data.id}
                    email={data.from}
                    name={data.from}
                    message={data.text}
                    time={formattedTime}
                    subject={data.subject}
                  ></EmailBody>
                )
              }
              {/* {
                            sentRecord === true && data.email !== user.email && (<EmailBody key={id} email={data.from} name={data.fromName} message={data.emailText} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} subject={data.sub}></EmailBody>)
                        } */}
            </>
          );
        })}
    </div>
  );
};

export default EmailList;
