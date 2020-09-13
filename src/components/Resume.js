import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import NavBar from "./NavBar";

//CSS Styles

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    fontFamily: "Grandstander",
  },
  timeline: {
    fontFamily: "Grandstander",
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    fontFamily: "Grandstander",
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },

    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "2rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timelineyear: {
    fontFamily: "Grandstander",
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    fontFamily: "Grandstander",
    color: "tomato",
    padding: "3rem auto",
    textTransform: "uppercase",
    paddingTop: "3rem",
  },
  subHeading: {
    fontFamily: "Grandstander",
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
  tasks: {
    fontSize: "1.2rem",
    color: "#FFF",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          {/* Work Experience 1 */}
          <Typography
            className={`${classes.timelineyear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2016-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              FULL STACK DEVELOPER
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato", fontFamily: "Grandstander" }}
            >
              Intelligent Digital Machines
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", fontFamily: "Grandstander" }}
            >
              Job Description
            </Typography>
            <Box
              component="div"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul>
                <li className={classes.tasks}>
                  Reviewing application requirements and interface designs.
                </li>
                <li className={classes.tasks}>
                  Developing new user-Interface features using React.js.
                </li>
                <li className={classes.tasks}>
                  Building reusable components and front-end libraries for
                  future use.
                </li>
                <li className={classes.tasks}>
                  ranslating designs and wireframes into high quality code.
                </li>
                <li className={classes.tasks}>
                  Design client-side and server-side architecture
                </li>
                <li className={classes.tasks}>
                  Develop and manage well-functioning databases and applications
                </li>
                <li className={classes.tasks}>
                  Build features and applications with a mobile responsive
                  design
                </li>
                <li className={classes.tasks}>
                  Documenting application changes and developing updates.
                </li>
                <li className={classes.tasks}>
                  Troubleshooting interface software and debugging application
                  codes.
                </li>
              </ul>
            </Box>
          </Box>

          {/* Work Experience 2 */}
          <Typography
            className={`${classes.timelineyear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              JavaScript Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato", fontFamily: "Grandstander" }}
            >
              Department of Economic Development
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", fontFamily: "Grandstander" }}
            >
              Job Description
            </Typography>
            <Box
              component="div"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul>
                <li className={classes.tasks}>
                  Designing and implementing Ajman buisness Map
                </li>
                <li className={classes.tasks}>
                  Creating buisness map layout/user interface using standard
                  HTML/SASS/jQuery languages
                </li>
                <li className={classes.tasks}>
                  Integrating data from JSON back-end databases (AJAX call)
                </li>
                <li className={classes.tasks}>
                  Integrating Google map functionality to display markers
                  indicating diffirent activities
                </li>
                <li className={classes.tasks}>
                  Determining user needs by analyzing technical requirements
                </li>
                <li className={classes.tasks}>
                  Identify uncovered problems by customer feedback and testing
                  (debugging)
                </li>
              </ul>
            </Box>
          </Box>

          {/* Work Experience 3 */}
          <Typography
            className={`${classes.timelineyear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Application Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato", fontFamily: "Grandstander" }}
            >
              Ajman University Information Technology Department
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", fontFamily: "Grandstander" }}
            >
              Job Description
            </Typography>
            <Box
              component="div"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ul>
                <li className={classes.tasks}>
                  Designing and developing Chatbots using natural language
                  proccessing.
                </li>
                <li className={classes.tasks}>
                  Hands on experience dealing with different types of chatbots
                </li>
                <li className={classes.tasks}>
                  Understanding chatbots Software architecture...enteties,
                  intents.....etc
                </li>
                <li className={classes.tasks}>
                  Ability to build custom Chatbots to serve specific buisness
                  requirements
                </li>
                <li className={classes.tasks}>
                  Developing cross platform mobile applications android, IOS,
                  Web based applications.
                </li>
                <li className={classes.tasks}>
                  Using diffirent platforms and libraries like React js,
                  Flutter, and Android studio
                </li>
                <li className={classes.tasks}>
                  Design Mobile application interfaces to improve user
                  experience
                </li>
                <li className={classes.tasks}>
                  Produce fully functional mobile applications writing clean
                  code
                </li>
                <li className={classes.tasks}>
                  Develop application programming interfaces (APIs) to support
                  mobile functionality
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
