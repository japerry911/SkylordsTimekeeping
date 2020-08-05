import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import {
  NONAUTH_ROUTES_ARRAY,
  AUTH_ROUTES_ARRAY,
} from "../../router/routeArrsObjs";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/usersActions";
import { handleOpen } from "../../redux/actions/snackbarActions";
import { useStyles } from "./DrawerStyles";

const MyDrawer = ({ open, onClose }) => {
  const classes = useStyles();

  const isAuthed = useSelector((state) => state.users.authed);
  const userId = useSelector((state) => state.users.user.ID);
  const dispatch = useDispatch();

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
        {!isAuthed
          ? NONAUTH_ROUTES_ARRAY.map((routeObject, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
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
            })
          : AUTH_ROUTES_ARRAY.map((routeObject, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    onClose();
                  }}
                  component={Link}
                  to={routeObject.path + userId}
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
        {isAuthed ? (
          <ListItem
            button
            onClick={() => {
              dispatch(signOut());
              dispatch(
                handleOpen({
                  type: "success",
                  message: "Signed out successfully",
                })
              );
              onClose();
            }}
            to={"/"}
          >
            <ListItemText>Sign Out</ListItemText>
          </ListItem>
        ) : null}
      </List>
    </Drawer>
  );
};

export default MyDrawer;
