import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import { NONAUTH_ROUTES_ARRAY } from "../../router/routeArrsObjs";
import { useStyles } from "./DrawerStyles";

const MyDrawer = ({ open, onClose, setTitle }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="left"
      classes={{
        paper: classes.drawerPaperStyle,
      }}
    >
      <List>
        {NONAUTH_ROUTES_ARRAY.map((routeObject, index) => {
          return (
            <ListItem
              button
              key={index}
              onClick={() => {
                setTitle(routeObject.title);
                onClose();
              }}
              component={Link}
              to={routeObject.path}
            >
              <ListItemText>{routeObject.title}</ListItemText>
              {routeObject.icon ? (
                <ListItemIcon>
                  <routeObject.icon />
                </ListItemIcon>
              ) : null}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MyDrawer;
