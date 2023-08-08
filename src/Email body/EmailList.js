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
import { queryString } from "../Components/Constants/constants";
import { Snackbar } from "@mui/material";

const EmailList = () => {
  const [emailData, setEmailData] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const userId = localStorage.getItem("userId");
  const date = new Date();
  const timeZone = "Asia/Kolkata";
  const formatters = [
    new Intl.DateTimeFormat("en-US", { timeStyle: "short", timeZone }),
  ];
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const GetAllEmailList = useGetAllEmailQuery(
    queryString({ params: { id: userId } }),
    {
      skip: !userId,
    }
  );
  // console.log(GetAllEmailList, "GetAllEmailList");
  console.log(snackbarMessage, "snackbarMessage");
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
  useEffect(() => {
    if (GetAllEmailList?.isError) {
      setSnackbarMessage(GetAllEmailList?.error?.data?.error);
      setState({ ...state, open: true });
    }
  }, [GetAllEmailList]);
  useEffect(() => {
    GetAllEmailList.refetch();
  }, []);
  return (
    <div className="emailList">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={snackbarMessage}
        key={vertical + horizontal}
        sx={{
          "& .MuiSnackbar-root": {
            backgroundColor: "blue", // Change the background color here
          },
        }}
      />
      <EmailListSettings refreshClick={refreshClick} />
      {/* <EmailType></EmailType> */}

      {GetAllEmailList?.isSuccess && has(GetAllEmailList, "data") && (
        <>
          {" "}
          {
            // data.email === user.email &&
            sentRecord === false && (
              <EmailBody
                data={
                  GetAllEmailList?.isSuccess &&
                  has(GetAllEmailList, "data") &&
                  GetAllEmailList?.data
                }
              ></EmailBody>
            )
          }
          {/* {
                            sentRecord === true && data.email !== user.email && (<EmailBody key={id} email={data.from} name={data.fromName} message={data.emailText} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} subject={data.sub}></EmailBody>)
                        } */}
        </>
      )}
    </div>
  );
};

export default EmailList;
