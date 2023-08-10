import React, { useEffect, useState } from "react";
import EmailBody from "./EmailBody";
import "./EmailList.css";
import EmailListSettings from "./EmailListSettings";
import { useGetAllEmailQuery } from "../Services/Email/EmailApi";
import { has } from "lodash";
import { queryString } from "../Components/Constants/constants";
import { Snackbar } from "@mui/material";

const EmailList = () => {
  const [snackbarMessage, setSnackbarMessage] = useState();
  const userId = localStorage.getItem("userId");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const GetAllEmailList = useGetAllEmailQuery(
    queryString({ params: { id: userId } }),
    {
      skip: !userId,
    }
  );
  const refreshClick = () => {
    GetAllEmailList.refetch();
  };

  const sentRecord = false;
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
            backgroundColor: "blue",
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
