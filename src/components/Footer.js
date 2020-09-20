import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Youtube from "@material-ui/icons/YouTube";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <Link
            to={{
              pathname: "https://www.facebook.com/hassan.jarko",
            }}
            target="_blank"
          >
            <Facebook />
          </Link>
        }
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <Link
            to={{
              pathname:
                "https://www.youtube.com/channel/UCb6CDkih8YZecVbjreioUSg?view_as=subscriber",
            }}
            target="_blank"
          >
            <Youtube />
          </Link>
        }
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/hassan-jarko-3a634949",
            }}
            target="_blank"
          >
            <LinkedIn />
          </Link>
        }
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <Link
            to={{
              pathname: "https://github.com/jarko1985",
            }}
            target="_blank"
          >
            <Github />
          </Link>
        }
      />
    </BottomNavigation>
  );
};

export default Footer;
