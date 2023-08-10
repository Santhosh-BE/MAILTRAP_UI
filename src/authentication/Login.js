import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLoginPostApiMutation } from "../Services/Email/EmailApi";
import Snackbar from "@mui/material/Snackbar";
import { has } from "lodash";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [loginApi, loginData] = useLoginPostApiMutation();
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
  const runLogin = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Perform validation
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/.test(password)
    ) {
      setPasswordError(
        "Password must contain at least one letter, one number, and one special character"
      );
      isValid = false;
    }

    if (isValid) {
      loginApi({ Email: email, Password: password });
      localStorage.setItem("Email", email);
    }
  };
  useEffect(() => {
    if (loginData?.isSuccess && has(loginData, "data")) {
      console.log(loginData, "success");
      setState({ ...state, open: true });
      setSnackbarMessage("Login Successfully");
      handleClick({ vertical: "top", horizontal: "center" });
      localStorage.setItem("ACCESS_TOKEN", loginData?.data?.accessToken);
      localStorage.setItem("REFRESH_TOKEN", loginData?.data?.reftoken);
      localStorage.setItem("userId", loginData?.data?.userid);
      navigate("/inbox");
    } else if (loginData?.isError) {
      setSnackbarMessage(loginData?.error?.data?.error);
      setState({ ...state, open: true });
      handleClick({ vertical: "top", horizontal: "center" });
    }
  }, [loginData]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
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
      <div>
        <img src="" alt="" />
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            error={Boolean(emailError)}
            id="outlined-error-helper-text-email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError}
          />
          <TextField
            error={Boolean(passwordError)}
            id="outlined-error-helper-text-password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={passwordError}
          />
          <Button variant="contained" color="primary" onClick={runLogin}>
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
