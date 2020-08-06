import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { useStyles } from "./AboutStyles";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText="ABOUT US"
        imgUrl="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/About/jf-brou-915UJQaxtrk-unsplash+(2).jpg"
      />
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Paper elevation={5} className={classes.paperStyle}>
            <Typography variant="h2" className={classes.titleStyle}>
              ABOUT US
            </Typography>
            <Divider className={classes.dividerStyle} />
            <figure className={classes.logoFigureStyle}>
              <img
                alt="Skylord's Timekeeping Logo"
                src="https://skylord-timekeeping492193924349324.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png"
                className={classes.logoImgStyle}
              />
            </figure>
            <Typography
              variant="body1"
              className={classes.bodyStyle}
              align="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dignissim arcu diam, ut sagittis enim lobortis at. Integer
              eleifend, lectus ut condimentum dignissim, justo arcu fermentum
              massa, cursus fringilla sem dolor blandit velit. Phasellus sed
              diam vitae urna cursus tristique. Quisque rutrum arcu non ante
              consequat scelerisque. Donec hendrerit purus at hendrerit
              volutpat. Nulla ut velit tortor. Fusce vehicula leo risus, ut
              porta risus sodales nec. Vivamus aliquet feugiat velit viverra
              viverra. Sed nec congue nisl. Cras condimentum vehicula interdum.
              Quisque maximus dolor metus, sed rutrum metus congue in. Nunc
              mattis nunc at aliquam lobortis. Mauris faucibus risus est, a
              dignissim nibh faucibus quis. Sed ipsum mi, varius in interdum
              quis, maximus nec libero. In rutrum gravida ante at viverra.
              Curabitur et tincidunt dolor, vel tincidunt dolor. Suspendisse
              iaculis convallis libero eu accumsan. In hac habitasse platea
              dictumst. Phasellus viverra mattis efficitur. Cras tempor elit
              leo, id facilisis diam imperdiet ac. Aenean suscipit volutpat dui,
              a feugiat nunc hendrerit vestibulum. Nunc et mauris sit amet ante
              porta commodo.
            </Typography>
            <Button
              className={classes.ctaButtonStyle}
              component={Link}
              to="/register-user"
            >
              Create an Account
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
