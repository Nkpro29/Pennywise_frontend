import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import { CssBaseline } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";
import { GoogleIcon } from "../CustomIcons.jsx";
import AppTheme from "../../../theme/AppTheme.jsx";
import ColorModeSelect from "../../../theme/ColorModeSelect.jsx";
// import { Grid2 } from "@mui/material";
// import image1 from "../../../assets/Money_income-bro-removebg-preview.png";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "150%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  minWidth: "50%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name");
    let isValid = true;

    if(!name.value){
        setNameError(true);
        setNameErrorMessage("Please enter your name.");
        isValid = false;
    }else{
        setNameError(false);
        setEmailErrorMessage("");
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minWidth: "100vw", minHeight: "100vh" }}>
        <SignInContainer
          direction="column"
          justifyContent="space-between"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColorModeSelect
            sx={{ position: "fixed", top: "1rem", right: "1rem" }}
          />
          <Card
            variant="outlined"
            style={{
              border: "2px solid grey",
              backgroundColor: "#181818",
              color: "white",
            }}
          >
            <Typography style={{ fontWeight: "800", fontSize: 40 }}>
              PennyWise
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
                color: "white",
              }}
            >
              <FormControl>
                <FormLabel htmlFor="name" style={{ color: "white" }}>
                  Name
                </FormLabel>
                <TextField
                  error={nameError}
                  helperText={nameErrorMessage}
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                  sx={{ ariaLabel: "name", color: "white" }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" style={{ color: "white" }}>
                  Email
                </FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                  sx={{ ariaLabel: "email", color: "white" }}
                />
              </FormControl>
              <FormControl>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <FormLabel htmlFor="password" style={{ color: "white" }}>
                    Password
                  </FormLabel>
                </Box>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>

              <FormControl>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <FormLabel htmlFor="password" style={{ color: "white" }}>
                    Confirm Password
                  </FormLabel>
                </Box>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="confirmpassword"
                  placeholder="••••••"
                  type="confirmpassword"
                  id="confrimpassword"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>

              <ForgotPassword open={open} handleClose={handleClose} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign in
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Have an account?{" "}
                <span>
                  <Link
                    href="/login"
                    variant="body2"
                    sx={{ alignSelf: "center" }}
                  >
                    SignIn
                  </Link>
                </span>
              </Typography>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => alert("Sign in with Google")}
                startIcon={<GoogleIcon />}
              >
                Sign in with Google
              </Button>
            </Box>
          </Card>
        </SignInContainer>
      </Box>
    </AppTheme>
  );
}
