import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import NavBar from "./NavBar";
import project1 from "../images/map.jpeg";
import project2 from "../images/travel.jpeg";
import project3 from "../images/car.jpeg";
import project4 from "../images/mobile.jpeg";

const useStyles = makeStyles({
  mainContainer: {
    height: "vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  textStyle: {
    fontFamily: "Grandstander",
  },
  btn1: {
    boxShadow: "3px 4px 0px 0px #1564ad",
    background: "linear-gradient(to bottom, #79bbff 5%, #378de5 100%)",
    backgroundColor: "#79bbff",
    borderRadius: 5,
    border: "1px solid #337bc4",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: "bold",
    padding: "5px 5px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #528ecc",
  },
  btn2: {
    boxShadow: "3px 4px 0px 0px #3e7327",
    background: "linear-gradient(to bottom, #77b55a 5%)",
    backgroundColor: "#77b55a",
    borderRadius: 5,
    border: "1px solid #4b8f29",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: "bold",
    padding: "5px 5px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #5b8a3c",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid
        container
        justify="center"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
                style={{
                  padding: "5px",
                  opacity: "0.9",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.textStyle}
                >
                  Ajman Business Map
                </Typography>
                <Typography
                  className={classes.textStyle}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Project Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn1}>
                share
              </Button>
              <Button size="small" color="primary" className={classes.btn2}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project2}
                style={{ padding: "5px", opacity: "0.9" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Travel Agency Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn1}>
                share
              </Button>
              <Button size="small" color="primary" className={classes.btn2}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project3}
                style={{ padding: "5px", opacity: "0.9" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Car Controller Web Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn1}>
                share
              </Button>
              <Button size="small" color="primary" className={classes.btn2}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project4}
                style={{ padding: "5px", opacity: "0.9" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  E Commerce Mobile Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 1 Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.btn1}>
                share
              </Button>
              <Button size="small" className={classes.btn2}>
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
