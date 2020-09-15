import React from "react";
import { Box, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Progress from "./Progress";
import Gauge from "./Gauge";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6rem",
  },
  gauge: {
    height: 200,
    width: 300,
    border: "1px solid black",
    margin: "5rem auto",
    background: "#223F5A",
    color: "#000",
    border: "2px solid #FFF",
    borderRadius: 10,
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <Box>
      <NavBar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge gauge_id="gauge-chart1" title="HTML5" percentage="0.95" />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge gauge_id="gauge-chart2" title="CSS3" percentage="0.95" />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge
                gauge_id="gauge-chart3"
                title="Java-Script"
                percentage="0.9"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge
                gauge_id="gauge-chart4"
                title="Bootstrap"
                percentage="0.95"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge
                gauge_id="gauge-chart5"
                title="React js"
                percentage="0.9"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge
                gauge_id="gauge-chart6"
                title="React Native"
                percentage="0.75"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge gauge_id="gauge-chart7" title="Node js" percentage="0.8" />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className={classes.gauge}>
              <Gauge gauge_id="gauge-chart8" title="JSON" percentage="0.9" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
