import React from "react";
import { Avatar, Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContactMail, AssignmentInd, Apps } from "@material-ui/icons";
import Typed from "react-typed";
import avatar from "../images/pp.jpg";
import { Link } from "react-router-dom";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "#FFF",
    fontFamily: "Grandstander",
  },
  subTitle: {
    color: "tan",
    marginBottom: "3rem",
    fontFamily: "Grandstander",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  btn: {
    margin: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Hassan Jarko" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hassan Jarko"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h4">
        <Typed
          strings={[
            "Full Stack Web Development",
            "Mobile App Development",
            "MERN Stack Development",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={2}>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              startIcon={<AssignmentInd />}
            >
              Resume
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              startIcon={<Apps />}
            >
              Portfolio
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              startIcon={<ContactMail />}
            >
              Contact
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
