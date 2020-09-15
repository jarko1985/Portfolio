import React from "react";
import GaugeChart from "react-gauge-chart";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Grandstander",
  },
});

export default function Gauge({ gauge_id, title, percentage }) {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GaugeChart id={gauge_id} percent={percentage} needleColor="#FFF" />
      <Typography className={classes.textStyle} variant="h5">
        {title}
      </Typography>
    </div>
  );
}
