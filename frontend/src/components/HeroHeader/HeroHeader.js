import React from "react";
import { useStyles } from "./HeroHeaderStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const HeroHeader = ({ headerText, imgUrl }) => {
  const classes = useStyles({ imgUrl });

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className={classes.headerDiv}>
        <Typography variant="h3" className={classes.headerTextStyle}>
          {headerText}
        </Typography>
      </div>
    </Grid>
  );
};

export default HeroHeader;
