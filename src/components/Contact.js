import React from "react";
import emailjs from "emailjs-com";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(2),
    cursor: "pointer",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  btn: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uofvyed",
        "template_8fpokgb",
        e.target,
        "user_31luMKnSF32BCgY4yU08t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <Typography
            variant="h5"
            style={{ color: "tomato", textAlign: "center", marginTop: "2rem" }}
          >
            Hire or Contact Me
          </Typography>
          <InputField
            name="name"
            className={classes.input}
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "#FFF" } }}
            margin="dense"
            size="medium"
          />
          <InputField
            name="email"
            className={classes.input}
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "#FFF" } }}
            margin="dense"
            size="medium"
          />
          <InputField
            name="company"
            className={classes.input}
            fullWidth={true}
            label="Company name"
            variant="outlined"
            inputProps={{ style: { color: "#FFF" } }}
            margin="dense"
            size="medium"
          />
          <InputField
            name="message"
            className={classes.input}
            label="Message"
            multiline
            rows={10}
            variant="outlined"
            fullWidth={true}
            inputProps={{ style: { color: "#FFF" } }}
          />
          <br />
          <Box component="div" style={{ textAlign: "center" }}>
            <Button
              type="submit"
              className={classes.btn}
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
