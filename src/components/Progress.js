import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  progress: {
    backgroundColor: "#d8d8d8",
    borderRadius: "20px",
    position: "relative",
    margin: "15px 0",
    height: "50px",
    width: "300px",
    marginTop: "50px",
  },
  progressDone: {
    background: "linear-gradient(to left, #2C6CBC, #9FCCFA)",
    boxShadow: "0 3px 3px -5px #2C6CBC, 0 2px 5px #2C6CBC",
    borderRadius: "20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "0",
    opacity: "0",
    transition: "1s ease 0.5s",
    fontFamily: "Grandstander",
  },
  textStyle: {
    marginRight: "20px",
    fontFamily: "Grandstander",
    fontWeight: "600",
  },
}));

export default function Progress({ done, title }) {
  const classes = useStyles();
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <div className={classes.progress}>
      <div className={classes.progressDone} style={style}>
        <Typography className={classes.textStyle}>{title}</Typography>
        <Typography>{done}%</Typography>
      </div>
    </div>
  );
}
