import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  Avatar,
  Divider,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import {
  Menu,
  Apps,
  AssignmentInd,
  ContactMail,
  Home,
  Assessment,
} from "@material-ui/icons";

import avatar from "../images/pp.jpg";
import Footer from "./Footer";

//CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 320,
    background: "#511",
    height: "100%",
    fontFamily: "Grandstander",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
    fontFamily: "Grandstander",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Assessment />,
    listText: "Skills",
    listPath: "/skills",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Hassan Jarko" />
      <Divider />
      <List style={{ fontFamily: "Grandstander" }}>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
              style={{ fontFamily: "Grandstander" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ backgroundColor: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "tomato" }} />
            </IconButton>
            <Typography
              variant="h5"
              style={{ color: "tan", fontFamily: "Grandstander" }}
            >
              My Portfolio
            </Typography>
          </Toolbar>
          <MobilRightMenuSlider
            anchor="left"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
            <Footer />
          </MobilRightMenuSlider>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
